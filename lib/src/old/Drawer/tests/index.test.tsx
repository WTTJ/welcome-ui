import { screen } from '@testing-library/react'
import { useEffect } from 'react'

import { Notifications, toast, Toast } from '@/Toast'

import { AssetDrawer, Drawer, useDrawer } from '..'
import { render } from '../../../../tests'

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

    await user.click(screen.getByText('open'))

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

    await user.click(screen.getByText('open'))

    expect(screen.queryByRole('dialog')).toHaveStyle({ height: '50%' })
  })

  it('should render "as" correctly', async () => {
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

    const { user } = render(<Test />)

    expect(screen.queryByRole('dialog')).toBeNull()

    await user.click(screen.getByText('open'))

    expect(screen.queryByRole('dialog')).toHaveTextContent('test')
  })

  it('should render correctly AssetDrawer', async () => {
    const Test = () => {
      const drawer = useDrawer()

      return (
        <>
          <AssetDrawer.Trigger store={drawer}>open</AssetDrawer.Trigger>
          <AssetDrawer aria-label="drawer" store={drawer}>
            <AssetDrawer.Header title="title" />
            test
          </AssetDrawer>
        </>
      )
    }

    const { user } = render(<Test />)

    expect(screen.queryByRole('dialog')).toBeNull()

    await user.click(screen.getByText('open'))

    expect(screen.queryByRole('dialog')).toHaveTextContent('test')

    expect(screen.queryByRole('dialog')).toHaveTextContent('title')
  })

  it('should render correctly AssetDrawer and Toast notification simultaneously', async () => {
    const Test = () => {
      const drawer = useDrawer()

      const id = 'toast-id'
      useEffect(() => {
        toast(
          <Toast.Growl dataTestId={`toast-${id}`} zIndex="1000">
            <Toast.Title>notification</Toast.Title>
          </Toast.Growl>,
          { duration: 5000, id, position: 'top-right' }
        )
      }, [])

      return (
        <>
          <Notifications pauseOnHover={false} />
          <AssetDrawer.Trigger store={drawer}>open</AssetDrawer.Trigger>
          <AssetDrawer aria-label="drawer" store={drawer}>
            <AssetDrawer.Header title="title" />
            test
          </AssetDrawer>
        </>
      )
    }

    const { user } = render(<Test />)

    // Check if the drawer is closed
    expect(screen.queryByRole('dialog')).toBeNull()

    // Open the drawer
    await user.click(screen.getByText('open'))

    // Check if the drawer is open
    expect(screen.queryByRole('dialog')).toHaveTextContent('test')
    expect(screen.queryByRole('dialog')).toHaveTextContent('title')

    // Check if the notification is visible
    expect(screen.getByTestId('toast-toast-id')).toBeInTheDocument()

    // Click on the notification
    await user.click(screen.getByTestId('toast-toast-id-close-button'))

    // Check if the drawer is still open
    expect(screen.queryByRole('dialog')).toHaveTextContent('test')
    expect(screen.queryByRole('dialog')).toHaveTextContent('title')
  })
})
