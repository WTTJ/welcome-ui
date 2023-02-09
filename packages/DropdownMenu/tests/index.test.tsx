import React from 'react'
import { renderHook } from '@testing-library/react-hooks'

import { render } from '../../../utils/tests'
import { DropdownMenu, useDropdownMenuState } from '../src'

const content = 'jungle'

describe('<DropdownMenu>', () => {
  it('should render correctly', () => {
    const dataTestId = 'dropdownMenu'
    const {
      result: { current: menu },
    } = renderHook(() => useDropdownMenuState())

    const { getByTestId } = render(
      <DropdownMenu {...menu} dataTestId={dataTestId}>
        {content}
      </DropdownMenu>
    )
    const dropdown = getByTestId(dataTestId)

    expect(dropdown).toHaveTextContent(content)
  })
})
