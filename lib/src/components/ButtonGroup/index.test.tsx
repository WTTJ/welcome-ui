import { Button } from '@/components/Button'

import { render } from '@tests'

import { ButtonGroup } from '.'

describe('<ButtonGroup>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <ButtonGroup data-testid="group">
        <Button>One</Button>
        {null}
        <Button>Two</Button>
        {false}
        <Button>Tree</Button>
        {undefined}
      </ButtonGroup>
    )
    const group = getByTestId('group')

    expect(group).toHaveTextContent('OneTwoTree')
  })
})
