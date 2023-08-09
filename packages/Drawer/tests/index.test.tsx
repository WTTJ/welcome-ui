import React from 'react'
import { vi } from 'vitest'
import { fireEvent } from '@testing-library/react'

import { render } from '../../../utils/tests'
import { Drawer, useDrawer } from '../src'

describe('<Drawer>', () => {
  it('should render correctly', () => {
    const Test = () => {
      const drawer = useDrawer()

      return (
        <>
          <Drawer.Trigger store={drawer}>open</Drawer.Trigger>
          <Drawer aria-label="drawer" store={drawer}>
            test
          </Drawer>
        </>
      )
    }

    const { getByText, queryByRole } = render(<Test />)
    expect(queryByRole('dialog')).toBeNull()
    fireEvent.click(getByText('open'))
    expect(queryByRole('dialog')).toHaveTextContent('test')
  })

  it('should render its size & placement correctly', () => {
    const Test = () => {
      const drawer = useDrawer()

      return (
        <>
          <Drawer.Trigger store={drawer}>open</Drawer.Trigger>
          <Drawer aria-label="drawer" placement="bottom" size="50%" store={drawer}>
            test
          </Drawer>
        </>
      )
    }

    const { getByText, queryByRole } = render(<Test />)
    fireEvent.click(getByText('open'))
    expect(queryByRole('dialog')).toHaveStyleRule('height', '50%')
  })

  it('should render "as" correctly', () => {
    const Test = () => {
      const drawer = useDrawer()
      const onClick = vi.fn()

      return (
        <>
          <Drawer.Trigger as="button" onClick={onClick} store={drawer}>
            open
          </Drawer.Trigger>
          <Drawer aria-label="drawer" store={drawer}>
            test
          </Drawer>
        </>
      )
    }

    const { getByText, queryByRole } = render(<Test />)
    expect(queryByRole('dialog')).toBeNull()
    fireEvent.click(getByText('open'))
    expect(queryByRole('dialog')).toHaveTextContent('test')
  })
})
