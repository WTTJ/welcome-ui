import React from 'react'
import { Button } from '@welcome-ui/button'

import { render } from '../../utils/tests'

import { ButtonGroup } from './index'

describe('<ButtonGroup>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <ButtonGroup dataTestId="group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Tree</Button>
      </ButtonGroup>
    )
    const group = getByTestId('group')

    expect(group).toHaveTextContent('OneTwoTree')
  })
})
