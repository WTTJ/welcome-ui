/* eslint-disable react/no-multi-comp */
import React from 'react'
import { fireEvent } from '@testing-library/react'

import { render } from '../../../utils/tests'
import { Drawer, useDrawerState } from '../src'

describe('<Drawer>', () => {
  it('should render correctly', () => {
    const Test = () => {
      const drawerState = useDrawerState()

      return (
        <>
          <Drawer.Trigger state={drawerState}>open</Drawer.Trigger>
          <Drawer aria-label="drawer" state={drawerState}>
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
      const drawerState = useDrawerState()

      return (
        <>
          <Drawer.Trigger state={drawerState}>open</Drawer.Trigger>
          <Drawer aria-label="drawer" placement="bottom" size="50%" state={drawerState}>
            test
          </Drawer>
        </>
      )
    }

    const { getByText, queryByRole } = render(<Test />)
    fireEvent.click(getByText('open'))
    expect(queryByRole('dialog')).toHaveStyleRule('height', '50%')
  })
})
