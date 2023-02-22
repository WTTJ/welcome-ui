import React from 'react'
import { fireEvent } from '@testing-library/react'

import { render } from '../../../utils/tests'
import { Modal, useModalState } from '../src'

describe('<Modal>', () => {
  it('should render correctly', () => {
    const Test = () => {
      const modalState = useModalState()

      return (
        <>
          <Modal.Trigger state={modalState}>open</Modal.Trigger>
          <Modal ariaLabel="modal" state={modalState}>
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
})
