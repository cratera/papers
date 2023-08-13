import { AuthError } from '@supabase/supabase-js'
import { useMutation } from '@tanstack/react-query'

import { useSupabase } from '@/src/services/supabase/components/SupabaseProvider'

export const useSignOut = () => {
  const { client } = useSupabase()

  return useMutation<void, AuthError>({
    mutationFn: async () => {
      const { error } = await client.auth.signOut()

      if (error) {
        throw error
      }
    },
  })
}
