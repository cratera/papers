import { Stack } from 'expo-router'

export default function ProtectedLayout() {
  return (
    <Stack>
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  )
}
