import { Link } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

import { useAuth } from '@/src/features/auth/components/AuthProvider'
import { useSignOut } from '@/src/features/auth/hooks'
import tw from '@/tailwind'

export default function App() {
  const { session } = useAuth()
  const { mutate } = useSignOut()

  return (
    <View style={tw`test`}>
      <Text>{`Hi ${session?.user?.email}!`}</Text>

      <Link href="/modal" style={tw`mt-4 text-purple`}>
        <Text>Open modal</Text>
      </Link>

      <Pressable
        style={tw`mt-4 bg-purple rounded p-2`}
        onPress={() => mutate()}
      >
        <Text style={tw`text-white`}>Sign out</Text>
      </Pressable>
    </View>
  )
}
