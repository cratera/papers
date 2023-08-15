import { useState } from 'react'
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native'

import { useSignInWithEmail } from '@/src/features/auth/hooks'
import tw from '@/tailwind'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { error, mutate, isLoading } = useSignInWithEmail({
    email,
    password,
  })

  return (
    <View style={tw`test`}>
      <Text style={tw`text-small`}>Email</Text>
      <TextInput
        onChangeText={setEmail}
        placeholder="Email"
        value={email}
        editable={!isLoading}
      />

      <Text style={tw`mt-3 text-small`}>Password</Text>
      <TextInput
        onChangeText={setPassword}
        placeholder="Password"
        value={password}
        editable={!isLoading}
      />

      <Pressable style={tw`mt-3`} onPress={() => mutate()}>
        <Text>Sign in</Text>
      </Pressable>

      {isLoading && <ActivityIndicator />}

      {error && <Text style={tw`text-orange`}>{error.message}</Text>}
    </View>
  )
}

export default SignIn
