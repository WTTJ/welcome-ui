import React from 'react'

import { render } from '../../utils/tests'
import { Button } from '../Button'

import { Group } from './index'

const content = (
  <>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Tree</Button>
  </>
)

describe('<Group>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Group dataTestId="group">{content}</Group>)
    const group = getByTestId('group')

    expect(group).toHaveTextContent('OneTwoTree')
  })
})
