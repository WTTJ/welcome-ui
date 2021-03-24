/* eslint-disable react/no-multi-comp */
import React from 'react'

import { render } from '../../utils/tests'

import { Drawer, useDrawerState } from './index'

describe('<Drawer>', () => {
  it('should render correctly', () => {
    const Test = () => {
      const drawer = useDrawerState()
      return (
        <>
          <Drawer.Trigger {...drawer}>open</Drawer.Trigger>
          <Drawer aria-label="drawer" {...drawer}>
            test
          </Drawer>
        </>
      )
    }

    const { getByText, queryByRole } = render(<Test />)
    expect(queryByRole('dialog')).toBeNull()
    getByText('open').click()
    expect(queryByRole('dialog')).toHaveTextContent('test')
  })

  it('should render its size & placement correctly', () => {
    const Test = () => {
      const drawer = useDrawerState()
      return (
        <>
          <Drawer.Trigger {...drawer}>open</Drawer.Trigger>
          <Drawer aria-label="drawer" placement="bottom" size="50%" {...drawer}>
            test
          </Drawer>
        </>
      )
    }

    const { getByText, queryByRole } = render(<Test />)
    getByText('open').click()
    expect(queryByRole('dialog')).toHaveStyleRule('height', '50%')
  })
})
