import { useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

import tw from '@/tailwind'

const Auth = () => {
  const router = useRouter()

  return (
    <View style={tw`test`}>
      <Pressable onPress={() => router.push('/(auth)/sign-in')}>
        <Text>Sign in</Text>
      </Pressable>

      <Pressable onPress={() => router.push('/(auth)/sign-up')}>
        <Text>Sign up</Text>
      </Pressable>
    </View>
  )
}

export default Auth
