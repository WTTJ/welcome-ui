import React from 'react'
import { fireEvent } from '@testing-library/react'

import { render } from '../../../utils/tests'
import { Modal, useModal } from '../src'

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
            <Modal.Content>
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
})
