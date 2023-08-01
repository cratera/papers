import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { useDeviceContext } from 'twrnc'

import { SupabaseProvider } from '@/src/services/supabase/components/SupabaseProvider'
import tw from '@/tailwind'

// Fallback error page. See: https://docs.expo.dev/routing/error-handling/#error-handling
export { ErrorBoundary } from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

// Hide the status bar.
StatusBar.setHidden(true)

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  // Hide the splash screen once fonts have loaded.
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <SupabaseProvider>
      <RootLayoutNav />
    </SupabaseProvider>
  )
}

function RootLayoutNav() {
  // Ensure that the device context is available to tailwind.
  useDeviceContext(tw)

  return (
    <Stack>
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  )
}
