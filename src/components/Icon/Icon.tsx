import { SvgProps } from 'react-native-svg'

import { ICON_COLORS } from './Icon.constants'
import * as IconSet from './IconSet'

import tw from '@/tailwind'

export interface IconProps extends Omit<SvgProps, 'children'> {
  name: keyof typeof IconSet
  /**
   * @default 'black'
   */
  color?: (typeof ICON_COLORS)[number]
}

export const Icon = ({ name, color = 'black', style, ...props }: IconProps) => {
  const IconComponent = IconSet[name]

  // We only use black icons for now, if we need to use other colors, we can add a color prop.
  return (
    <IconComponent
      style={[
        // Fill color. This works because all icons use `currenColor`.
        tw`text-${color}`,
        style,
      ]}
      {...props}
    />
  )
}
