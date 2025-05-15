import { fireEvent, screen, waitFor } from '@testing-library/react'

import { Tab, useTab } from '../'
import { render } from '../../../../tests'

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
      <Tab.Panel data-testid="panel1" store={tab} tabId="tab1">
        Panel 1
      </Tab.Panel>
      <Tab.Panel data-testid="panel2" store={tab} tabId="tab2">
        Panel 2
      </Tab.Panel>
      <Tab.Panel data-testid="panel3" store={tab} tabId="tab3">
        Panel 3
      </Tab.Panel>
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
      <Tab.Panel store={tab} tabId="tab1">
        Panel 1
      </Tab.Panel>
    </>
  )
}

describe('Tabs', () => {
  it('renders an accessible structure', async () => {
    render(<Tabs />)

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

    const panel1 = screen.getByTestId('panel1')
    const panel2 = screen.getByTestId('panel2')
    const panel3 = screen.getByTestId('panel3')

    expect(panel1).toHaveTextContent('Panel 1')
    expect(panel1).not.toHaveAttribute('hidden')
    expect(panel2).toHaveTextContent('Panel 2')
    expect(panel2).toHaveAttribute('hidden')
    expect(panel3).toHaveTextContent('Panel 3')
    expect(panel3).toHaveAttribute('hidden')

    const activeBar = screen.getByRole('tablist').querySelector('span:last-child')

    expect(activeBar).toBeInTheDocument()

    // Simulate click on second tab
    fireEvent.click(tab2)

    expect(tab1).toHaveAttribute('aria-selected', 'false')
    expect(tab2).toHaveAttribute('aria-selected', 'true')
    expect(tab3).toHaveAttribute('aria-selected', 'false')

    await waitFor(() => {
      expect(panel1).toHaveAttribute('hidden')
    })
    expect(panel2).not.toHaveAttribute('hidden')
    expect(panel3).toHaveAttribute('hidden')
  })

  describe('with one tab', () => {
    it('does not render active bar', async () => {
      render(<OneTab />)

      const activeBar = screen.getByRole('tablist').querySelector('span:last-child')

      await waitFor(() => expect(activeBar).not.toBeInTheDocument())
    })
  })
})
