import { render } from '@testing-library/react-native'

import { Icon, IconProps } from '.'

const setup = (props: IconProps) => {
  return render(<Icon {...props} />)
}

describe('Icon', () => {
  it('renders correctly with given props', async () => {
    const component = setup({
      name: 'ArrowRight',
      color: 'black',
      rotate: '0',
    }).toJSON()

    expect(component).toMatchSnapshot()
  })
})
