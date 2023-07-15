import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { Preview } from '@storybook/react'
import React from 'react'
import { View } from 'react-native'

const preview: Preview = {
  decorators: [
    (StoryFn) => (
      <View>
        <StoryFn />
      </View>
    ),
    withBackgrounds,
  ],
  parameters: {
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
  },
}

export default preview
