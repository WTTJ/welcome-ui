import React from 'react'

import { render } from '../../utils/tests'
import { Button } from '../Button'

import { Group } from './index'

describe('<Group>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Group dataTestId="group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Tree</Button>
      </Group>
    )
    const group = getByTestId('group')

    expect(group).toHaveTextContent('OneTwoTree')
  })
})
