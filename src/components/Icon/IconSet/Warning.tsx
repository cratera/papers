import Svg, { Path, SvgProps } from 'react-native-svg'

export const Warning = (props: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.45 12.45V6.75H10.55V12.45H12.45ZM12.45 16.25V14.35H10.55V16.25H12.45ZM2 11.5C2 6.256 6.2465 2 11.4905 2C16.744 2 21 6.256 21 11.5C21 16.744 16.744 21 11.4905 21C6.2465 21 2 16.744 2 11.5ZM11.5 19.1C7.301 19.1 3.9 15.699 3.9 11.5C3.9 7.301 7.301 3.9 11.5 3.9C15.699 3.9 19.1 7.301 19.1 11.5C19.1 15.699 15.699 19.1 11.5 19.1Z"
        fill="currentColor"
      />
    </Svg>
  )
}
