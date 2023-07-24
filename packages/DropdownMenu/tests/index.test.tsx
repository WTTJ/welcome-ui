import React from 'react'
import { renderHook } from '@testing-library/react-hooks'

import { render } from '../../../utils/tests'
import { DropdownMenu, useDropdownMenu } from '../src'

const content = 'jungle'

describe('<DropdownMenu>', () => {
  it('should render correctly', () => {
    const dataTestId = 'dropdownMenu'
    const {
      result: { current: dropdownMenu },
    } = renderHook(() => useDropdownMenu())

    const { getByTestId } = render(
      <DropdownMenu dataTestId={dataTestId} store={dropdownMenu}>
        {content}
      </DropdownMenu>
    )
    const dropdown = getByTestId(dataTestId)

    expect(dropdown).toHaveTextContent(content)
  })
})
