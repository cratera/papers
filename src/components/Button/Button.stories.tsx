import { Meta, StoryObj } from '@storybook/react-native'

import Button, { ButtonProps } from './Button'

const meta = {
  component: Button,
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<ButtonProps>

export const Primary = {
  args: {
    label: 'Button',
  },
} satisfies Story
