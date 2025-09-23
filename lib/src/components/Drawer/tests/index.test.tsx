import { screen } from '@testing-library/react'
import React, { useEffect, useState } from 'react'

import { render } from '@tests'

import { Drawer, useDrawer } from '../'
import type { UseDrawer } from '../types'

describe('<Drawer>', () => {
  it('should render correctly', async () => {
    const Test = () => {
      const drawer = useDrawer()

      return (
        <>
          <Drawer.Trigger store={drawer}>open</Drawer.Trigger>
          <Drawer aria-label="drawer" store={drawer}>
            <div>Drawer open</div>
          </Drawer>
        </>
      )
    }

    const { user } = render(<Test />)

    expect(screen.queryByRole('dialog')).toBeNull()

    await user.click(screen.getByText('open'))

    expect(screen.queryByRole('dialog')).toHaveTextContent('Drawer open')
  })

  it('should render conditionally', async () => {
    const DrawerTest = () => {
      const drawer = useDrawer()
      const shouldRender = false

      return (
        <>
          <Drawer.Trigger as="button" store={drawer} type="button">
            open
          </Drawer.Trigger>
          <Drawer aria-label="drawer" store={drawer}>
            <Drawer.Content>{shouldRender && <div>div exist?</div>}</Drawer.Content>
          </Drawer>
        </>
      )
    }

    const { user } = render(<DrawerTest />)

    await user.click(screen.getByText('open'))

    expect(screen.queryByRole('dialog')).not.toHaveTextContent('Drawer.Body exist?')
  })

  it('should render with data-enter attribute', async () => {
    const Test = () => {
      const [, setCount] = useState(1)
      const drawer = useDrawer()

      return (
        <>
          <Drawer.Trigger store={drawer}>open</Drawer.Trigger>
          <TestDrawer drawer={drawer} setCount={setCount} />
        </>
      )
    }
    const TestDrawer = ({
      drawer,
      setCount,
    }: {
      drawer: UseDrawer
      setCount: React.Dispatch<React.SetStateAction<number>>
    }) => {
      useEffect(() => {
        setCount(c => c + 1)
      }, [setCount])

      return (
        <Drawer aria-label="drawer" store={drawer}>
          <div>Drawer open</div>
        </Drawer>
      )
    }

    const { user } = render(<Test />)

    expect(screen.queryByRole('dialog')).toBeNull()

    await user.click(screen.getByText('open'))

    expect(screen.queryByRole('dialog')).toHaveTextContent('Drawer open')
    expect(screen.queryByRole('dialog')).toHaveAttribute('data-dialog')
  })
})
