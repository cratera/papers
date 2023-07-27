import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { Decorator, Parameters } from '@storybook/react'
import React from 'react'
import { View } from 'react-native'

export const decorators = [
  (StoryFn) => (
    <View>
      <StoryFn />
    </View>
  ),
  withBackgrounds,
] satisfies Decorator[]

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'plain',
    values: [{ name: 'plain', value: 'white' }],
  },
} satisfies Parameters
