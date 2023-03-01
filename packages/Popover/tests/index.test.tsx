import React from 'react'
import { fireEvent } from '@testing-library/react'

import { render } from '../../../utils/tests'
import { Popover, usePopoverState } from '../src'

describe('<Popover>', () => {
  it('should render correctly', () => {
    const Test = () => {
      const popoverState = usePopoverState()

      return (
        <>
          <Popover.Trigger state={popoverState}>open</Popover.Trigger>
          <Popover aria-label="popover" state={popoverState}>
            Popover open
          </Popover>
        </>
      )
    }

    const { getByText, queryByRole } = render(<Test />)
    expect(queryByRole('dialog')).toBeNull()
    fireEvent.click(getByText('open'))
    expect(queryByRole('dialog')).toHaveTextContent('Popover open')
  })
})
