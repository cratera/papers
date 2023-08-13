import { SupabaseClient, createClient } from '@supabase/supabase-js'
import { createContext, useContext, useMemo } from 'react'
import 'react-native-url-polyfill/auto'

import { Database } from '@/src/services/supabase/types/generated/database'
import { ExpoSecureStoreAdapter } from '@/src/utils/storage/ExpoSecureStoreAdapter'

type SupabaseContextValue = {
  client: SupabaseClient<Database>
}

const SupabaseContext = createContext<SupabaseContextValue | undefined>(
  undefined
)

export const SupabaseProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const client = useMemo(
    () =>
      createClient<Database>(
        process.env.EXPO_PUBLIC_SUPABASE_URL,
        process.env.EXPO_PUBLIC_SUPABASE_API_KEY,
        {
          auth: {
            storage: ExpoSecureStoreAdapter,
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: false,
          },
        }
      ),
    []
  )

  return (
    <SupabaseContext.Provider value={{ client }}>
      {children}
    </SupabaseContext.Provider>
  )
}

export const useSupabase = () => {
  const supabase = useContext(SupabaseContext)

  if (!supabase) {
    throw new Error('useSupabase must be used within a SupabaseProvider')
  }

  return supabase
}
