import { Text as RNText, TextProps as RNTextProps } from 'react-native'

import { TEXT_COLORS, TEXT_VARIANTS } from './Text.constants'

import tw from '@/tailwind'

export interface TextProps extends RNTextProps {
  /**
   * @default 'body'
   */
  variant?: (typeof TEXT_VARIANTS)[number]
  /**
   * Whether the text should be bold. Only applies to `display`, `body` and `small` variants.
   * @default false
   */
  bold?: boolean
  /**
   * @default 'black'
   */
  color?: (typeof TEXT_COLORS)[number]
}

export const Text = ({
  variant = 'body',
  bold,
  color = 'black',
  style,
  ...props
}: TextProps) => {
  return (
    <RNText
      style={[
        tw.style(
          // Font family.
          variant.startsWith('h')
            ? `font-serif`
            : bold
            ? `font-sans-bold`
            : `font-sans`,
          // Font size.
          `text-${variant}`,
          // Font color.
          `text-${color}`
        ),
        style,
      ]}
      {...props}
    />
  )
}
