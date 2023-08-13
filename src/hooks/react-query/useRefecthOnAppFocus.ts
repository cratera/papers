import { focusManager } from '@tanstack/react-query'
import { useEffect } from 'react'
import type { AppStateStatus } from 'react-native'
import { AppState, Platform } from 'react-native'

const onAppStateChange = (status: AppStateStatus) => {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active')
  }
}

/**
 * Enables auto refetching of TanStack queries on app focus.
 *
 * @docs https://tanstack.com/query/v4/docs/react/react-native#refetch-on-app-focus
 *
 * @usage `useRefecthOnAppFocus()` in the root of your app.
 */
export const useRefecthOnAppFocus = () => {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange)

    return () => subscription.remove()
  }, [])
}
