import React from 'react'
import { screen } from '@testing-library/react'

import { Popover, usePopover } from '../'
import { render } from '../../../../tests'

const contentText = 'Popover open'
const buttonText = 'open'

const PopoverWrapper = () => {
  const store = usePopover()

  return (
    <>
      <Popover.Trigger store={store}>{buttonText}</Popover.Trigger>
      <Popover aria-label="popover" store={store}>
        {contentText}
      </Popover>
    </>
  )
}

describe('<Popover>', () => {
  it('should render correctly on click on popover trigger button', async () => {
    const { user } = render(<PopoverWrapper />)

    expect(screen.queryByRole('dialog')).toBeNull()

    const button = screen.getByText(buttonText)
    const dialog = screen.getByText(contentText)

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(dialog).toBeInTheDocument()

    await user.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
  })
})
