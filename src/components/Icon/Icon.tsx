import { SvgProps } from 'react-native-svg'

import * as IconSet from './IconSet'

import tw from '@/tailwind'

export interface IconProps extends Omit<SvgProps, 'children'> {
  name: keyof typeof IconSet
}

export const Icon = ({ name, style, ...props }: IconProps) => {
  const IconComponent = IconSet[name]

  // We only use black icons for now, if we need to use other colors, we can add a color prop.
  return <IconComponent style={[tw`text-black`, style]} {...props} />
}
