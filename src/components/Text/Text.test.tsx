import { render } from '@testing-library/react-native'

import { Text, TextProps } from '.'

import tw from '@/tailwind'

const setup = (props: TextProps) => {
  return render(<Text {...props} />)
}

describe('Text', () => {
  it('renders correctly with given props', async () => {
    const component = setup({
      children: 'Welcome to Papers!',
      variant: 'body',
      bold: true,
      style: tw`text-center`,
    }).toJSON()

    expect(component).toMatchSnapshot()
  })
})
