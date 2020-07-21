import React from 'react'

import { render } from '../../utils/tests'

import { DropdownMenu } from './index'

const content = 'jungle'

describe('<DropdownMenu>', () => {
  it('should render correctly', () => {
    const dataTestId = 'dropdownMenu'
    const { getByTestId } = render(<DropdownMenu dataTestId={dataTestId}>{content}</DropdownMenu>)
    const dropdown = getByTestId(dataTestId)

    expect(dropdown).toHaveTextContent(content)
  })
})
