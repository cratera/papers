import { render } from '@testing-library/react-native'

import { Button, ButtonProps } from '.'

const setup = (props: ButtonProps) => {
  return render(<Button {...props} />)
}

describe('Button', () => {
  it('renders correctly with given props', async () => {
    const tree = setup({
      children: 'Google',
    }).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
