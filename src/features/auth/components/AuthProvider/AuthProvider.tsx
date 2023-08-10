import { Session } from '@supabase/supabase-js'
import { useRouter, useSegments } from 'expo-router'
import { createContext, useContext, useEffect, useState } from 'react'
import 'react-native-url-polyfill/auto'

import { useSupabase } from '@/src/services/supabase/components/SupabaseProvider'

type AuthContextValue = {
  session: Session | null
  isLoading: boolean
}

const AuthContext = createContext<AuthContextValue | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<AuthContextValue['session']>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { client } = useSupabase()
  const segment = useSegments()
  const router = useRouter()

  useEffect(() => {
    // Get the current session from expo-secure-store (if it exists)
    client.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setIsLoading(false)
    })

    // Listen for auth changes and update the session in state accordingly
    client.auth.onAuthStateChange((_, session) => {
      setSession(session)
    })
  }, [client])

  useEffect(() => {
    if (session) {
      // If the user is already logged in, redirect to the protected route
      if (segment[0] === '(auth)') {
        router.replace('/(protected)')
      }
    } else {
      // If the user is not logged in, redirect to the auth route
      if (segment[0] === '(protected)') {
        router.replace('/(auth)')
      }
    }
  }, [session, segment, router])

  return (
    <AuthContext.Provider value={{ session, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const supabase = useContext(AuthContext)

  if (!supabase) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return supabase
}
