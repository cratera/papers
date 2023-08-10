import { AuthError, AuthResponse } from '@supabase/supabase-js'
import { useMutation } from '@tanstack/react-query'

import { useSupabase } from '@/src/services/supabase/components/SupabaseProvider'

type SignUpWithEmailProps = {
  email: string
  password: string
}

export const useSignUpWithEmail = ({
  email,
  password,
}: SignUpWithEmailProps) => {
  const { client } = useSupabase()

  return useMutation<AuthResponse['data'], AuthError>({
    mutationFn: async () => {
      const { data, error } = await client.auth.signUp({
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
