import NetInfo from '@react-native-community/netinfo'
import { onlineManager } from '@tanstack/react-query'

/**
 * Enables auto refetching of TanStack queries on reconnect in React Native.
 *
 * @docs https://tanstack.com/query/v4/docs/react/react-native#online-status-management
 *
 * @usage `enableAutoQueryRefetchOnReconnect()` in the root of your app outside of any component.
 */
export const enableAutoQueryRefetchOnReconnect = () => {
  onlineManager.setEventListener((setOnline) => {
    return NetInfo.addEventListener((state) => {
      setOnline(!!state.isConnected)
    })
  })
}
