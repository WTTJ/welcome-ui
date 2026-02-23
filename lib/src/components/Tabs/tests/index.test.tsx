import { screen } from '@testing-library/react'

import { render } from '@tests'

import { Tabs, useTab } from '../index'

const TabsList = () => {
  const tab = useTab({ defaultSelectedId: 'tab1' })

  return (
    <>
      <Tabs aria-label="Tabs" store={tab}>
        <Tabs.Tab data-testid="tab1" id="tab1" store={tab}>
          Tab 1
        </Tabs.Tab>
        <Tabs.Tab data-testid="tab2" id="tab2" store={tab}>
          Tab 2
        </Tabs.Tab>
        <Tabs.Tab data-testid="tab3" disabled id="tab3" store={tab}>
          Tab 3
        </Tabs.Tab>
      </Tabs>
    </>
  )
}

const OneTab = () => {
  const tab = useTab({ defaultSelectedId: 'tab1' })

  return (
    <>
      <Tabs aria-label="Tabs" store={tab}>
        <Tabs.Tab id="tab1" store={tab}>
          Tab 1
        </Tabs.Tab>
      </Tabs>
    </>
  )
}

describe('Tabs', () => {
  it('renders an accessible structure', async () => {
    const { user } = render(<TabsList />)

    const tab1 = screen.getByTestId('tab1')
    const tab2 = screen.getByTestId('tab2')
    const tab3 = screen.getByTestId('tab3')

    expect(tab1).toHaveTextContent('Tab 1')
    expect(tab1).toHaveAttribute('aria-selected', 'true')
    expect(tab1).not.toHaveAttribute('aria-disabled')
    expect(tab2).toHaveTextContent('Tab 2')
    expect(tab2).toHaveAttribute('aria-selected', 'false')
    expect(tab2).not.toHaveAttribute('aria-disabled')
    expect(tab3).toHaveTextContent('Tab 3')
    expect(tab3).toHaveAttribute('aria-selected', 'false')
    expect(tab3).toHaveAttribute('aria-disabled')

    // Simulate click on second tab
    await user.click(tab2)

    expect(tab1).toHaveAttribute('aria-selected', 'false')
    expect(tab2).toHaveAttribute('aria-selected', 'true')
    expect(tab3).toHaveAttribute('aria-selected', 'false')
  })

  it('prevents clicking disabled tabs', async () => {
    const { user } = render(<TabsList />)

    const tab1 = screen.getByTestId('tab1')
    const tab3 = screen.getByTestId('tab3')

    expect(tab1).toHaveAttribute('aria-selected', 'true')

    // Click disabled tab should not change selection
    await user.click(tab3)
    expect(tab1).toHaveAttribute('aria-selected', 'true')
    expect(tab3).toHaveAttribute('aria-selected', 'false')
  })

  it('renders single tab correctly', () => {
    render(<OneTab />)

    const tab = screen.getByRole('tab')
    expect(tab).toHaveTextContent('Tab 1')
    expect(tab).toHaveAttribute('aria-selected', 'true')
  })

  it('forwards size prop to Tab nested in li wrapper', () => {
    const TabsWithLiWrapper = () => {
      const tab = useTab({ defaultSelectedId: 'tab1' })

      return (
        <Tabs aria-label="Tabs" size="md" store={tab}>
          <li>
            <Tabs.Tab data-testid="tab1-li" id="tab1" store={tab}>
              Tab 1
            </Tabs.Tab>
          </li>
          <li>
            <Tabs.Tab data-testid="tab2-li" id="tab2" store={tab}>
              Tab 2
            </Tabs.Tab>
          </li>
        </Tabs>
      )
    }

    render(<TabsWithLiWrapper />)

    const tab1 = screen.getByTestId('tab1-li')
    const tab2 = screen.getByTestId('tab2-li')

    expect(tab1.classList.toString().includes('size-md')).toBe(true)
    expect(tab2.classList.toString().includes('size-md')).toBe(true)
  })

  it('forwards size prop to Tab deeply nested in li > div wrapper', () => {
    const TabsWithDeepWrapper = () => {
      const tab = useTab({ defaultSelectedId: 'tab1' })

      return (
        <Tabs aria-label="Tabs" size="md" store={tab}>
          <li>
            <div>
              <Tabs.Tab data-testid="tab1-deep" id="tab1" store={tab}>
                Tab 1
              </Tabs.Tab>
            </div>
          </li>
          <li>
            <div>
              <Tabs.Tab data-testid="tab2-deep" id="tab2" store={tab}>
                Tab 2
              </Tabs.Tab>
            </div>
          </li>
        </Tabs>
      )
    }
    render(<TabsWithDeepWrapper />)

    const tab1 = screen.getByTestId('tab1-deep')
    const tab2 = screen.getByTestId('tab2-deep')

    expect(tab1.classList.toString().includes('size-md')).toBe(true)
    expect(tab2.classList.toString().includes('size-md')).toBe(true)
  })

  it('forwards size prop to Tab with siblings in wrapper', () => {
    const TabsWithSiblings = () => {
      const tab = useTab({ defaultSelectedId: 'tab1' })

      return (
        <Tabs aria-label="Tabs" size="lg" store={tab}>
          <li>
            <span>Icon 1</span>
            <Tabs.Tab data-testid="tab1-sibling" id="tab1" store={tab}>
              Tab 1
            </Tabs.Tab>
          </li>
          <li>
            <span>Icon 2</span>
            <Tabs.Tab data-testid="tab2-sibling" id="tab2" store={tab}>
              Tab 2
            </Tabs.Tab>
          </li>
        </Tabs>
      )
    }
    render(<TabsWithSiblings />)

    const tab1 = screen.getByTestId('tab1-sibling')
    const tab2 = screen.getByTestId('tab2-sibling')

    expect(tab1.classList.toString().includes('size-lg')).toBe(true)
    expect(tab2.classList.toString().includes('size-lg')).toBe(true)
  })
})
