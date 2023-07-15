import Constants from 'expo-constants'

let AppEntryPoint

// Render Storybook if storybookEnabled is true
if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('./.storybook').default
} else {
  // Default to rendering Papers
  AppEntryPoint = require('expo-router/entry')
}

export default AppEntryPoint
