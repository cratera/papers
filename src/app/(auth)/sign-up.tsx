import { useState } from 'react'
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native'

import { useSignUpWithEmail } from '@/src/features/auth/hooks'
import tw from '@/tailwind'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { error, mutate, isLoading } = useSignUpWithEmail({
    email,
    password,
  })

  if (isLoading) {
    return <ActivityIndicator />
  }

  return (
    <View style={tw`test`}>
      <TextInput onChangeText={setEmail} placeholder="Email" value={email} />

      <TextInput
        onChangeText={setPassword}
        placeholder="Password"
        value={password}
      />

      {error && <Text>{JSON.stringify(error)}</Text>}

      <Pressable onPress={() => mutate()}>
        <Text>Sign up</Text>
      </Pressable>
    </View>
  )
}

export default SignIn
