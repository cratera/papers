import tw from '@/tailwind'
import { Link, Stack } from 'expo-router'
import { Text, View } from 'react-native'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={tw`test`}>
        <Text style={tw`font-bold text-xl`}>This screen doesn't exist.</Text>

        <Link href="/" style={tw`mt-4 px-4`}>
          <Text style={tw`text-sm text-blue-500`}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  )
}