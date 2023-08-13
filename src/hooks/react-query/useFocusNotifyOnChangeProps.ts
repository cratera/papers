import { useFocusEffect } from '@react-navigation/native'
import { NotifyOnChangeProps } from '@tanstack/query-core'
import { useCallback, useRef } from 'react'

/**
 * Provides a function to be used as the `notifyOnChangeProps` option of `useQuery` to disable re-renders on out-of-focus screens.
 *
 * @docs https://tanstack.com/query/v4/docs/react/react-native#disable-re-renders-on-out-of-focus-screens
 *
 * @usage
 * ```
 * function MyComponent() {
 * const notifyOnChangeProps = useFocusNotifyOnChangeProps();
 *
 * const { dataUpdatedAt } = useQuery({
 *   queryKey: ['myKey'],
 *   queryFn: async () => {
 *     const response = await fetch('https://api.github.com/repos/tannerlinsley/react-query');
 *     return response.json();
 *   },
 *   notifyOnChangeProps,
 * });
 *
 *  return <div>DataUpdatedAt: {dataUpdatedAt}</div>;
 * };
 * ```
 */
export const useFocusNotifyOnChangeProps = (
  notifyOnChangeProps?: NotifyOnChangeProps
) => {
  const focusedRef = useRef(true)

  useFocusEffect(
    useCallback(() => {
      focusedRef.current = true

      return () => {
        focusedRef.current = false
      }
    }, [])
  )

  return () => {
    if (!focusedRef.current) {
      return []
    }

    if (typeof notifyOnChangeProps === 'function') {
      return notifyOnChangeProps()
    }

    return notifyOnChangeProps
  }
}
