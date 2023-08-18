import { Meta, StoryObj } from '@storybook/react-native'
import { FlatList, View } from 'react-native'

import { Text, TextProps } from './Text'
import { TEXT_COLORS, TEXT_VARIANTS } from './Text.constants'

import tw from '@/tailwind'

export default {
  component: Text,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: TEXT_VARIANTS,
    },
    color: {
      control: { type: 'select' },
      options: TEXT_COLORS,
    },
  },
} satisfies Meta<TextProps>

type Story = StoryObj<TextProps>

export const Default = {
  args: {
    children: 'Welcome to Papers!',
    variant: 'h1',
    bold: false,
    color: 'black',
  },
} satisfies Story

// Render all variants on top of each other.
export const Variants = () => {
  return (
    <FlatList
      data={TEXT_VARIANTS}
      keyExtractor={(variant) => variant}
      renderItem={(variant) => {
        return <Text variant={variant.item}>{variant.item}</Text>
      }}
      ItemSeparatorComponent={() => <View style={tw`h-2`} />}
    />
  )
}
