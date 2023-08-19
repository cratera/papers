import { render } from '@testing-library/react-native'

import { Button, ButtonProps } from '.'

const setup = (props: ButtonProps) => {
  return render(<Button {...props} />)
}

describe('Button', () => {
  it('renders correctly with given props', async () => {
    const component = setup({
      label: 'Back',
      icon: 'ChevronRight',
      iconPosition: 'left',
      iconRotation: '180',
      color: 'black',
      outlined: false,
    }).toJSON()

    expect(component).toMatchSnapshot()
  })
})
