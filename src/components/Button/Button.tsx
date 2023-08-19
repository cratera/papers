import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native'

import { BUTTON_COLORS, ICON_POSITIONS } from './Button.constants'
import { Icon, IconProps } from '../Icon'
import { Text } from '../Text'

import tw from '@/tailwind'

export interface ButtonProps
  extends Omit<PressableProps, 'children' | 'style'> {
  /**
   * Label of the button.
   */
  label?: string
  /**
   * Color of the button background.
   *
   * @default 'black'
   */
  color?: (typeof BUTTON_COLORS)[number]
  /**
   * Whether the button should be outlined.
   * @default false
   */
  outlined?: boolean
  /**
   * Name of the icon to display.
   */
  icon?: IconProps['name']
  /**
   * Position of the icon relative to the label.
   * @default 'left'
   */
  iconPosition?: (typeof ICON_POSITIONS)[number]
  /**
   * Rotation in degrees of the icon.
   */
  iconRotation?: IconProps['rotate']
  // The style prop from PressableProps can't be used inside an array to merge styles so we override it here to explicitly use ViewStyle.
  style?: StyleProp<ViewStyle>
}

/**
 * If `label` is not provided, but `icon` is, the button will be a square.
 */
export const Button = ({
  label,
  color = 'black',
  outlined,
  icon,
  iconPosition,
  iconRotation,
  style,
  ...props
}: ButtonProps) => {
  const contentColor = color === 'white' ? 'black' : 'white'

  return label || icon ? (
    <Pressable
      style={({ pressed }) => [
        tw.style(
          `flex-row items-center justify-center bg-${color} px-6 h-16 rounded-xl`,
          outlined && `border-2 border-${contentColor}`,
          pressed && `opacity-80`,
          !label && `w-16`
        ),
        style,
      ]}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <Icon name={icon} rotate={iconRotation} color={contentColor} />
      )}

      <Text variant="h4" color={contentColor}>
        {label}
      </Text>

      {icon && iconPosition === 'right' && (
        <Icon name={icon} rotate={iconRotation} color={contentColor} />
      )}
    </Pressable>
  ) : null
}
