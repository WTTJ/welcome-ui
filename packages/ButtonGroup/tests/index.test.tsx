import React from 'react'

import { render } from '../../../utils/tests'
import { Button } from '../../Button/src'
import { ButtonGroup } from '../src'

describe('<ButtonGroup>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <ButtonGroup dataTestId="group">
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
