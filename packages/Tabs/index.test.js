/* eslint-disable react/no-multi-comp */
import React from 'react'
import { fireEvent } from '@testing-library/react'

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
            <Tab id="tab1" {...tab}>
              Tab 1
            </Tab>
            <Tab id="tab2" {...tab}>
              Tab 2
            </Tab>
            <Tab disabled id="tab3" {...tab}>
              Tab 3
            </Tab>
          </Tab.List>
          <Tab.Panel tabId="tab1" {...tab}>
            Panel 1
          </Tab.Panel>
          <Tab.Panel tabId="tab2" {...tab}>
            Panel 2
          </Tab.Panel>
          <Tab.Panel tabId="tab3" {...tab}>
            Panel 3
          </Tab.Panel>
        </>
      )
    }
    const { getAllByRole, getByRole } = render(<Tabs />)
    const tabs = getAllByRole('tab')
    expect(tabs[0]).toHaveTextContent('Tab 1')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[0]).not.toHaveAttribute('aria-disabled')
    expect(tabs[1]).toHaveTextContent('Tab 2')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false')
    expect(tabs[1]).not.toHaveAttribute('aria-disabled')
    expect(tabs[2]).toHaveTextContent('Tab 3')
    expect(tabs[2]).toHaveAttribute('aria-selected', 'false')
    expect(tabs[2]).toHaveAttribute('aria-disabled')

    const panels = getAllByRole('tabpanel')
    expect(panels[0]).toHaveTextContent('Panel 1')
    expect(panels[0]).not.toHaveAttribute('hidden')
    expect(panels[1]).toHaveTextContent('Panel 2')
    expect(panels[1]).toHaveAttribute('hidden')
    expect(panels[2]).toHaveTextContent('Panel 3')
    expect(panels[2]).toHaveAttribute('hidden')

    const activeBar = getActiveBar({ getByRole })
    expect(activeBar).toBeInTheDocument()

    // Simulate click on second tab
    fireEvent.click(tabs[1])

    expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[2]).toHaveAttribute('aria-selected', 'false')

    expect(panels[0]).toHaveAttribute('hidden')
    expect(panels[1]).not.toHaveAttribute('hidden')
    expect(panels[2]).toHaveAttribute('hidden')
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
