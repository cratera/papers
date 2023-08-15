import { Link, Stack } from 'expo-router'
import { Text, View } from 'react-native'

import tw from '@/tailwind'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={tw`test`}>
        <Text style={tw`font-bold text-h3`}>This screen doesn't exist.</Text>

        <Link href="/" style={tw`mt-4 px-4`}>
          <Text style={tw`text-body text-purple`}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  )
}
