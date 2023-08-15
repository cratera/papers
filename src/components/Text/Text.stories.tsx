import { Meta, StoryObj } from '@storybook/react-native'
import { FlatList, View } from 'react-native'

import { Text, TextProps, textVariants } from './Text'

import tw from '@/tailwind'

const meta = {
  component: Text,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: textVariants,
    },
  },
} satisfies Meta<TextProps>

export default meta
type Story = StoryObj<TextProps>

export const Default = {
  args: {
    children: 'Welcome to Papers!',
    variant: 'h1',
    bold: false,
  },
} as Story

// Render all variants on top of each other.
export const Variants = () => {
  return (
    <FlatList
      data={textVariants}
      keyExtractor={(variant) => variant}
      renderItem={(variant) => {
        return <Text variant={variant.item}>{variant.item}</Text>
      }}
      ItemSeparatorComponent={() => <View style={tw`h-2`} />}
    />
  )
}
