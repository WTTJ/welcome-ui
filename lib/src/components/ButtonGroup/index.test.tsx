import { Button } from '@/components/Button'

import { expectAsSupport, render } from '@tests'

import { ButtonGroup } from '.'

describe('<ButtonGroup>', () => {
  expectAsSupport(ButtonGroup)

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
