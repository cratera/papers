import Svg, { Path, SvgProps } from 'react-native-svg'

export const Cross = (props: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M19.1871 3L12 10.1871L4.81286 3L3 4.81286L10.1871 12L3 19.1871L4.81286 21L12 13.8129L19.1871 21L21 19.1871L13.8129 12L21 4.81286L19.1871 3Z"
        fill="currentColor"
      />
    </Svg>
  )
}
