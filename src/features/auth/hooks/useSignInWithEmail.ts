import { AuthError, AuthTokenResponse } from '@supabase/supabase-js'
import { useMutation } from '@tanstack/react-query'

import { useSupabase } from '@/src/services/supabase/components/SupabaseProvider'

type SignInWithEmailProps = {
  email: string
  password: string
}

export const useSignInWithEmail = ({
  email,
  password,
}: SignInWithEmailProps) => {
  const { client } = useSupabase()

  return useMutation<AuthTokenResponse['data'], AuthError>({
    mutationFn: async () => {
      const { data, error } = await client.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        throw error
      }

      return data
    },
  })
}
