import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useFonts } from 'expo-font'
import { Slot, SplashScreen } from 'expo-router'
import { useEffect } from 'react'
import { LogBox, StatusBar } from 'react-native'
import { useDeviceContext } from 'twrnc'

import { AuthProvider, useAuth } from '../features/auth/components/AuthProvider'
import { useRefecthOnAppFocus } from '../hooks/react-query'
import { enableAutoQueryRefetchOnReconnect } from '../utils/react-query'

import { fontList } from '@/assets/fonts'
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
  const [fontsLoaded, fontsError] = useFonts(fontList)

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (fontsError) throw fontsError
  }, [fontsError])

  useRefecthOnAppFocus()

  if (!fontsLoaded) {
    return null
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SupabaseProvider>
        <AuthProvider>
          <RootLayoutNav />
        </AuthProvider>
      </SupabaseProvider>
    </QueryClientProvider>
  )
}

const RootLayoutNav = () => {
  const { isLoading: isAuthLoading } = useAuth()

  // Hide the splash screen when fonts and auth are loaded.
  useEffect(() => {
    if (!isAuthLoading) {
      SplashScreen.hideAsync()
    }
  }, [isAuthLoading])

  // Ensure that the device context is available to tailwind.
  useDeviceContext(tw)

  return <Slot />
}
