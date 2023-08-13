import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store'

export const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return getItemAsync(key)
  },
  setItem: (key: string, value: string) => {
    setItemAsync(key, value)
  },
  removeItem: (key: string) => {
    deleteItemAsync(key)
  },
}
