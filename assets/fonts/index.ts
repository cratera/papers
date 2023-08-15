import { loadAsync } from 'expo-font'

export const fontList = {
  'Karla-Regular': require('./Karla-Regular.ttf'),
  'Karla-Bold': require('./Karla-Bold.ttf'),
  'YoungSerif-Regular': require('./YoungSerif-Regular.ttf'),
} satisfies Parameters<typeof loadAsync>[0]
