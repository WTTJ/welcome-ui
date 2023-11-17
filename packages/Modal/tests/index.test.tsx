import React, { useEffect, useState } from 'react'
import { describe, expect, it } from 'vitest'
import { fireEvent, waitFor } from '@testing-library/react'

import { render } from '../../../utils/tests'
import { Modal, UseModal, useModal } from '../src'

describe('<Modal>', () => {
  it('should render correctly', () => {
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

    const { getByText, queryByRole } = render(<Test />)
    expect(queryByRole('dialog')).toBeNull()
    fireEvent.click(getByText('open'))
    expect(queryByRole('dialog')).toHaveTextContent('Modal open')
  })

  it('should render conditionally', () => {
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

    const { getByText, queryByRole } = render(<ModalTest />)
    fireEvent.click(getByText('open'))
    expect(queryByRole('dialog')).not.toHaveTextContent('Modal.Body exist?')
  })

  it('should render with data-enter attribute', async () => {
    const Test = () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [count, setCount] = useState(1)
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

    const { getByText, queryByRole } = render(<Test />)
    expect(queryByRole('dialog')).toBeNull()
    fireEvent.click(getByText('open'))
    expect(queryByRole('dialog')).toHaveTextContent('Modal open')
    expect(queryByRole('dialog')).toHaveAttribute('data-dialog')
    expect(queryByRole('dialog')).not.toHaveAttribute('data-enter')

    await waitFor(() => {
      expect(queryByRole('dialog')).toHaveAttribute('data-enter')
    })
  })
})
