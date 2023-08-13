import { devLog } from './src/utils/devLog'

let AppEntryPoint

// Render Storybook if storybookEnabled is true
if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true') {
  devLog('Storybook was initialized successfully')
  AppEntryPoint = require('./.storybook').default
} else {
  devLog('Papers was initialized successfully')
  AppEntryPoint = require('expo-router/entry')
}

export default AppEntryPoint
