import React from 'react'
import { describe, expect, it } from 'vitest'
import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '../../../utils/tests'
import { PopoverHover, usePopoverHover } from '../src'

const contentText = 'Popover open'
const buttonText = 'open'

const PopoverHoverWrapper = () => {
  const store = usePopoverHover()

  return (
    <>
      <PopoverHover.Trigger store={store}>{buttonText}</PopoverHover.Trigger>
      <PopoverHover aria-label="popover" data-testid="popover" store={store}>
        {contentText}
      </PopoverHover>
    </>
  )
}

describe('<PopoverHover>', () => {
  it('should render correctly on click on popover trigger button', async () => {
    const { getByTestId, getByText, queryByRole } = render(<PopoverHoverWrapper />)

    expect(queryByRole('dialog')).toBeNull()

    const button = getByText(buttonText)
    const dialog = getByTestId('popover')

    expect(dialog).toHaveAttribute('hidden')
    expect(dialog).toBeInTheDocument()

    userEvent.hover(button)

    await waitFor(
      () => {
        expect(queryByRole('dialog')).toHaveAttribute('data-enter')
      },
      { timeout: 5000 }
    )
  })
})
