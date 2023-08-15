import { getStorybookUI } from '@storybook/react-native'
import * as Font from 'expo-font'
import registerRootComponent from 'expo/build/launch/registerRootComponent'
import { StatusBar } from 'react-native'

import { fontList } from '../assets/fonts'
import './storybook.requires'

// Hide the status bar.
StatusBar.setHidden(true)

// Load the same fonts as the app.
Font.loadAsync(fontList)

// Get the Storybook UI.
const StorybookUIRoot = getStorybookUI({})

// Register the Storybook UI as the root component.
registerRootComponent(StorybookUIRoot)
