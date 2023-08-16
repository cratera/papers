import Svg, { Path, SvgProps } from 'react-native-svg'

export const Menu = (props: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path d="M4 11H20V13H4V11Z" fill="currentColor" />
      <Path d="M4 17H20V19H4V17Z" fill="currentColor" />
      <Path d="M4 5H20V7H4V5Z" fill="currentColor" />
    </Svg>
  )
}
