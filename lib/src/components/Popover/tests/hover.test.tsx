import { screen } from '@testing-library/react'

import { render } from '@tests'

import { PopoverHover, usePopoverHover } from '../'

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
  it('should render correctly on hover on popover trigger button', async () => {
    const { user } = render(<PopoverHoverWrapper />)

    expect(screen.queryByRole('dialog')).toBeNull()

    const button = screen.getByText(buttonText)
    const dialog = screen.getByTestId('popover')

    expect(dialog).toHaveAttribute('hidden')
    expect(dialog).toBeInTheDocument()

    await user.hover(button)

    /** we need to wait the showTimeout from component */
    setTimeout(() => {
      expect(dialog).toHaveAttribute('data-enter')
    }, 400)
  })
})
