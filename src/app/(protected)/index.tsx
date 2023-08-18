import { Link } from 'expo-router'
import { Pressable, View } from 'react-native'

import { Text } from '@/src/components'
import { useAuth } from '@/src/features/auth/components/AuthProvider'
import { useSignOut } from '@/src/features/auth/hooks'
import tw from '@/tailwind'

export default function App() {
  const { session } = useAuth()
  const { mutate } = useSignOut()

  return (
    <View style={tw`test`}>
      <Text variant="h4">{`Hi ${session?.user?.email}!`}</Text>

      <Link href="/modal" style={tw`mt-4`}>
        <Text>Open modal</Text>
      </Link>

      <Pressable
        style={tw`mt-4 bg-purple rounded p-2`}
        onPress={() => mutate()}
      >
        <Text color="white">Sign out</Text>
      </Pressable>
    </View>
  )
}
