import Svg, { Path, SvgProps } from 'react-native-svg'

export const Check = (props: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path d="M23 6L21 4L9 16L4 11L2 13L9 20L23 6Z" fill="currentColor" />
    </Svg>
  )
}
