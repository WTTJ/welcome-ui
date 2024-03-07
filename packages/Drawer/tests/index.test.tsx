import React from 'react'
import { act, screen } from '@testing-library/react'

import { render } from '../../../utils/tests'
import { Drawer, useDrawer } from '../src'

describe('<Drawer>', () => {
  it('should render correctly', async () => {
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

    const { user } = render(<Test />)

    expect(screen.queryByRole('dialog')).toBeNull()

    await act(() => user.click(screen.getByText('open')))

    expect(screen.queryByRole('dialog')).toHaveTextContent('test')
  })

  it('should render its size & placement correctly', async () => {
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

    const { user } = render(<Test />)

    await act(() => user.click(screen.getByText('open')))

    expect(screen.queryByRole('dialog')).toHaveStyleRule('height', '50%')
  })

  it('should render "as" correctly', async () => {
    const Test = () => {
      const drawer = useDrawer()
      const onClick = jest.fn()

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

    const { user } = render(<Test />)

    expect(screen.queryByRole('dialog')).toBeNull()

    await act(() => user.click(screen.getByText('open')))

    expect(screen.queryByRole('dialog')).toHaveTextContent('test')
  })
})
