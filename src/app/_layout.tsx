import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useFonts } from 'expo-font'
import { Slot, SplashScreen } from 'expo-router'
import { useEffect } from 'react'
import { LogBox, StatusBar } from 'react-native'
import { useDeviceContext } from 'twrnc'

import { AuthProvider, useAuth } from '../features/auth/components/AuthProvider'
import { useRefecthOnAppFocus } from '../hooks/react-query'
import { enableAutoQueryRefetchOnReconnect } from '../utils/react-query'

import { SupabaseProvider } from '@/src/services/supabase/components/SupabaseProvider'
import tw from '@/tailwind'

if (LogBox) {
  LogBox.ignoreLogs([
    // It should be safe to ignore this warning since it seems to be mostly related to Safari.
    /^@supabase\/gotrue-js: Stack guards not supported .* not support stack guards.$/,
  ])
}

// Fallback error page. See: https://docs.expo.dev/routing/error-handling/#error-handling
export { ErrorBoundary } from 'expo-router'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

// Hide the status bar.
StatusBar.setHidden(true)

// Create a react-query client.
const queryClient = new QueryClient()

enableAutoQueryRefetchOnReconnect()

export default function RootLayout() {
  const [fontsLoaded, fontsError] = useFonts({
    'Karla-Regular': require('../../assets/fonts/Karla-Regular.ttf'),
    'Karla-Bold': require('../../assets/fonts/Karla-Bold.ttf'),
    'YoungSerif-Regular': require('../../assets/fonts/YoungSerif-Regular.ttf'),
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (fontsError) throw fontsError
  }, [fontsError])

  useRefecthOnAppFocus()

  return (
    <QueryClientProvider client={queryClient}>
      <SupabaseProvider>
        <AuthProvider>
          <RootLayoutNav fontsLoaded={fontsLoaded} />
        </AuthProvider>
      </SupabaseProvider>
    </QueryClientProvider>
  )
}

const RootLayoutNav = ({ fontsLoaded }: { fontsLoaded: boolean }) => {
  const { isLoading: isAuthLoading } = useAuth()

  // Hide the splash screen when fonts and auth are loaded.
  useEffect(() => {
    if (fontsLoaded && !isAuthLoading) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, isAuthLoading])

  // Ensure that the device context is available to tailwind.
  useDeviceContext(tw)

  return <Slot />
}
