import Constants from 'expo-constants'

import devLog from './src/utils/devLog'

let AppEntryPoint

// Render Storybook if storybookEnabled is true
if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  devLog('Storybook was initialized successfully')
  AppEntryPoint = require('./.storybook').default
} else {
  devLog('Papers was initialized successfully')
  AppEntryPoint = require('expo-router/entry')
}

export default AppEntryPoint
