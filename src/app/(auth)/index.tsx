import { useRouter } from 'expo-router'
import { Pressable, View } from 'react-native'

import { Text } from '@/src/components'
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
