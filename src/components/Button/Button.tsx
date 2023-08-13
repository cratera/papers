import { Pressable, PressableProps, Text } from 'react-native'

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
