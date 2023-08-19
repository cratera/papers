import { Meta, StoryObj } from '@storybook/react-native'

import { Button, ButtonProps } from './Button'
import { BUTTON_COLORS, ICON_POSITIONS } from './Button.constants'
import { ICON_ROTATIONS } from '../Icon/Icon.constants'
import * as IconSet from '../Icon/IconSet'

const iconSet = Object.keys(IconSet) as (keyof typeof IconSet)[]

export default {
  component: Button,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: BUTTON_COLORS,
    },
    icon: {
      control: { type: 'select' },
      options: iconSet,
    },
    iconPosition: {
      control: { type: 'select' },
      options: ICON_POSITIONS,
    },
    iconRotation: {
      control: { type: 'select' },
      options: ICON_ROTATIONS,
    },
  },
} satisfies Meta<ButtonProps>

type Story = StoryObj<ButtonProps>

export const Default = {
  args: {
    label: 'Back',
    icon: 'ChevronRight',
    iconPosition: 'left',
    iconRotation: '180',
    color: 'black',
    outlined: false,
  },
} satisfies Story
