import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useRef } from 'react'

/**
 * Refetches a TanStack query on screen focus.
 *
 * @docs https://tanstack.com/query/v4/docs/react/react-native#refresh-on-screen-focus
 *
 * @usage `useRefetchOnScreenFocus(refetch)` in a screen component. `refetch` being the function returned by `useQuery`.
 */
export const useRefetchOnScreenFocus = <T>(refetch: () => Promise<T>) => {
  const firstTimeRef = useRef(true)

  useFocusEffect(
    useCallback(() => {
      if (firstTimeRef.current) {
        firstTimeRef.current = false
        return
      }

      refetch()
    }, [refetch])
  )
}
