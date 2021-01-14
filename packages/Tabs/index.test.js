/* eslint-disable react/no-multi-comp */
import React from 'react'
import userEvent from '@testing-library/user-event'

import { render } from '../../utils/tests'

import { Tab, useTabState } from './index'

function getActiveBar({ getByRole }) {
  const tabList = getByRole('tablist')
  return tabList.querySelector('span:last-child')
}

describe('Tabs', () => {
  it('renders an accessible structure', () => {
    function Tabs() {
      const tab = useTabState({ selectedId: 'tab1' })
      return (
        <>
          <Tab.List aria-label="Tabs" {...tab}>
            <Tab data-testid="tab1" id="tab1" {...tab}>
              Tab 1
            </Tab>
            <Tab data-testid="tab2" id="tab2" {...tab}>
              Tab 2
            </Tab>
            <Tab data-testid="tab3" disabled id="tab3" {...tab}>
              Tab 3
            </Tab>
          </Tab.List>
          <Tab.Panel data-testid="panel1" tabId="tab1" {...tab}>
            Panel 1
          </Tab.Panel>
          <Tab.Panel data-testid="panel2" tabId="tab2" {...tab}>
            Panel 2
          </Tab.Panel>
          <Tab.Panel data-testid="panel3" tabId="tab3" {...tab}>
            Panel 3
          </Tab.Panel>
        </>
      )
    }
    const { getByRole, getByTestId } = render(<Tabs />)
    const tab1 = getByTestId('tab1')
    const tab2 = getByTestId('tab2')
    const tab3 = getByTestId('tab3')
    expect(tab1).toHaveTextContent('Tab 1')
    expect(tab1).toHaveAttribute('aria-selected', 'true')
    expect(tab1).not.toHaveAttribute('aria-disabled')
    expect(tab2).toHaveTextContent('Tab 2')
    expect(tab2).toHaveAttribute('aria-selected', 'false')
    expect(tab2).not.toHaveAttribute('aria-disabled')
    expect(tab3).toHaveTextContent('Tab 3')
    expect(tab3).toHaveAttribute('aria-selected', 'false')
    expect(tab3).toHaveAttribute('aria-disabled')

    const panel1 = getByTestId('panel1')
    const panel2 = getByTestId('panel2')
    const panel3 = getByTestId('panel3')
    expect(panel1).toHaveTextContent('Panel 1')
    expect(panel1).not.toHaveAttribute('hidden')
    expect(panel2).toHaveTextContent('Panel 2')
    expect(panel2).toHaveAttribute('hidden')
    expect(panel3).toHaveTextContent('Panel 3')
    expect(panel3).toHaveAttribute('hidden')

    const activeBar = getActiveBar({ getByRole })
    expect(activeBar).toBeInTheDocument()

    // Simulate click on second tab
    userEvent.click(tab2)

    expect(tab1).toHaveAttribute('aria-selected', 'false')
    expect(tab2).toHaveAttribute('aria-selected', 'true')
    expect(tab3).toHaveAttribute('aria-selected', 'false')

    expect(panel1).toHaveAttribute('hidden')
    expect(panel2).not.toHaveAttribute('hidden')
    expect(panel3).toHaveAttribute('hidden')
  })

  describe('with one tab', () => {
    it('does not render active bar', () => {
      function Tabs() {
        const tab = useTabState({ selectedId: 'tab1' })
        return (
          <>
            <Tab.List aria-label="Tabs" {...tab}>
              <Tab id="tab1" {...tab}>
                Tab 1
              </Tab>
            </Tab.List>
            <Tab.Panel tabId="tab1" {...tab}>
              Panel 1
            </Tab.Panel>
          </>
        )
      }
      const { getByRole } = render(<Tabs />)
      const activeBar = getActiveBar({ getByRole })
      expect(activeBar).not.toBeInTheDocument()
    })
  })
})
