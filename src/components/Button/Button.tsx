import { Pressable, PressableProps } from 'react-native'

import { Text } from '@/src/components'

export interface ButtonProps extends Omit<PressableProps, 'children'> {
  label: string
}

export default function Button({ label, ...props }: ButtonProps) {
  return (
    <Pressable {...props}>
      <Text>{label}</Text>
    </Pressable>
  )
}
