export default function devLog(message: string) {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    console.log(message)
  }
}
