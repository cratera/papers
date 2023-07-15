import { getStorybookUI } from '@storybook/react-native'
import registerRootComponent from 'expo/build/launch/registerRootComponent'
import { StatusBar } from 'react-native'
import './storybook.requires'

// Hide the status bar.
StatusBar.setHidden(true)

// Get the Storybook UI.
const StorybookUIRoot = getStorybookUI({})

// Register the Storybook UI as the root component.
registerRootComponent(StorybookUIRoot)
