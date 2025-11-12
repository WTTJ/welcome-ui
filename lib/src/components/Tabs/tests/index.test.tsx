import { screen } from '@testing-library/react'

import { render } from '@tests'

import { Tab, useTab } from '../'

const Tabs = () => {
  const tab = useTab({ defaultSelectedId: 'tab1' })

  return (
    <>
      <Tab.List aria-label="Tabs" store={tab}>
        <Tab data-testid="tab1" id="tab1" store={tab}>
          Tab 1
        </Tab>
        <Tab data-testid="tab2" id="tab2" store={tab}>
          Tab 2
        </Tab>
        <Tab data-testid="tab3" disabled id="tab3" store={tab}>
          Tab 3
        </Tab>
      </Tab.List>
    </>
  )
}

const OneTab = () => {
  const tab = useTab({ defaultSelectedId: 'tab1' })

  return (
    <>
      <Tab.List aria-label="Tabs" store={tab}>
        <Tab id="tab1" store={tab}>
          Tab 1
        </Tab>
      </Tab.List>
    </>
  )
}

describe('Tabs', () => {
  it('renders an accessible structure', async () => {
    const { user } = render(<Tabs />)

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
    const { user } = render(<Tabs />)

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
})
