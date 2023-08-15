import { render } from '@testing-library/react-native'

import { Button, ButtonProps } from '.'

const setup = (props: ButtonProps) => {
  return render(<Button {...props} />)
}

describe('Button', () => {
  it('renders correctly with given props', async () => {
    const component = setup({
      label: 'Button',
    }).toJSON()

    expect(component).toMatchSnapshot()
  })
})
