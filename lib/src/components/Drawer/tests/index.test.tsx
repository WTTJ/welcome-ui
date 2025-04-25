import { screen } from '@testing-library/react'

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
})
