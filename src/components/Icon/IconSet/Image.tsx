import Svg, { Path, SvgProps } from 'react-native-svg'

export const Image = (props: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5C3 3.897 3.897 3 5 3H19C20.103 3 21 3.897 21 5V19C21 20.103 20.103 21 19 21H5C3.897 21 3 20.103 3 19V5ZM19 5H5V19H19.002L19 5ZM9 13L6 17H18L13 10L10 14L9 13ZM10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11C9.32843 11 10 10.3284 10 9.5Z"
        fill="currentColor"
      />
    </Svg>
  )
}
