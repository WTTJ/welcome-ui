import { screen } from '@testing-library/react'
import React, { useEffect, useState } from 'react'

import type { UseModal } from '../'
import { Modal, useModal } from '../'
import { render } from '../../../../tests'

describe('<Modal>', () => {
  it('should render correctly', async () => {
    const Test = () => {
      const modal = useModal()

      return (
        <>
          <Modal.Trigger store={modal}>open</Modal.Trigger>
          <Modal ariaLabel="modal" store={modal}>
            <div>Modal open</div>
          </Modal>
        </>
      )
    }

    const { user } = render(<Test />)

    expect(screen.queryByRole('dialog')).toBeNull()

    await user.click(screen.getByText('open'))

    expect(screen.queryByRole('dialog')).toHaveTextContent('Modal open')
  })

  it('should render conditionally', async () => {
    const ModalTest = () => {
      const modal = useModal()
      const shouldRender = false

      return (
        <>
          <Modal.Trigger as="button" store={modal} type="button">
            open
          </Modal.Trigger>
          <Modal ariaLabel="modal" store={modal}>
            <Modal.Content store={modal}>
              {shouldRender && <Modal.Body>Modal.Body exist?</Modal.Body>}
            </Modal.Content>
          </Modal>
        </>
      )
    }

    const { user } = render(<ModalTest />)

    await user.click(screen.getByText('open'))

    expect(screen.queryByRole('dialog')).not.toHaveTextContent('Modal.Body exist?')
  })

  it('should render with data-enter attribute', async () => {
    const Test = () => {
      const [, setCount] = useState(1)
      const modal = useModal()

      return (
        <>
          <Modal.Trigger store={modal}>open</Modal.Trigger>
          <TestModal modal={modal} setCount={setCount} />
        </>
      )
    }
    const TestModal = ({
      modal,
      setCount,
    }: {
      modal: UseModal
      setCount: React.Dispatch<React.SetStateAction<number>>
    }) => {
      useEffect(() => {
        setCount(c => c + 1)
      }, [setCount])

      return (
        <Modal ariaLabel="modal" store={modal}>
          <div>Modal open</div>
        </Modal>
      )
    }

    const { user } = render(<Test />)

    expect(screen.queryByRole('dialog')).toBeNull()

    await user.click(screen.getByText('open'))

    expect(screen.queryByRole('dialog')).toHaveTextContent('Modal open')
    expect(screen.queryByRole('dialog')).toHaveAttribute('data-dialog')
  })
})
