import { Text as RNText, TextProps as RNTextProps } from 'react-native'

import tw from '@/tailwind'

export const textVariants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'display',
  'body',
  'small',
] as const

export interface TextProps extends RNTextProps {
  /**
   * @default 'body'
   */
  variant?: (typeof textVariants)[number]
  /**
   * Whether the text should be bold. Only applies to `display`, `body` and `small` variants.
   * @default false
   */
  bold?: boolean
}

export const Text = ({
  variant = 'body',
  bold,
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
          variant === 'h1' && `text-h1`,
          variant === 'h2' && `text-h2`,
          variant === 'h3' && `text-h3`,
          variant === 'h4' && `text-h4`,
          variant === 'display' && `text-display`,
          variant === 'body' && `text-body`,
          variant === 'small' && `text-small`
        ),
        style,
      ]}
      {...props}
    />
  )
}
