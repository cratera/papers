import { Meta, StoryObj } from '@storybook/react-native'
import { FlatList, View } from 'react-native'

import { Icon, IconProps } from './Icon'
import * as IconSet from './IconSet'
import { Text } from '../Text'

import tw from '@/tailwind'

const iconSet = Object.keys(IconSet) as (keyof typeof IconSet)[]

export default {
  component: Icon,
  argTypes: {
    name: {
      control: { type: 'select' },
      options: iconSet,
    },
  },
} satisfies Meta<IconProps>

type Story = StoryObj<IconProps>

export const Default = {
  args: {
    name: 'ArrowRight',
  },
} satisfies Story

// Render every icon in a grid.
export const Set = () => {
  return (
    <FlatList
      data={iconSet}
      keyExtractor={(icon) => icon}
      renderItem={(icon) => {
        return (
          <View
            style={tw`w-1/3 aspect-square items-center justify-center gap-2`}
          >
            <Icon name={icon.item} />
            <Text variant="small">{icon.item}</Text>
          </View>
        )
      }}
      numColumns={3}
      contentContainerStyle={tw`min-h-full`}
    />
  )
}
