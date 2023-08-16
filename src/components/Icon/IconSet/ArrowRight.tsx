import Svg, { Path, SvgProps } from 'react-native-svg'

export const ArrowRight = (props: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M16.9731 13.3333L12.2744 18.12L14.125 20L22 12L14.125 4L12.2744 5.88L16.9731 10.6667L1 10.6667L1 13.3333L16.9731 13.3333Z"
        fill="currentColor"
      />
    </Svg>
  )
}
