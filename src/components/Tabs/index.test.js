/* eslint-disable react/no-multi-comp */
import React from 'react'

import { render } from '../../utils/tests'

import { Tabs, TabsItem, TabsPanel } from './index'

const content = 'Panel 1Panel 2Panel 3'

const TabsPanels = () => (
  <>
    <TabsPanel>Panel 1</TabsPanel>
    <TabsPanel>Panel 2</TabsPanel>
    <TabsPanel>Panel 3</TabsPanel>
  </>
)

describe('<Tabs>', () => {
  it('should render correctly', () => {
    const { container, getByTestId } = render(
      <Tabs
        items={
          <>
            <TabsItem>Tab1</TabsItem>
            <TabsItem>Tab2</TabsItem>
            <TabsItem>Tab3</TabsItem>
          </>
        }
        name="tabsTest"
      >
        <TabsPanels />
      </Tabs>
    )
    const items = getByTestId('tabsItems')
    const activeBar = getByTestId('activeBar')

    expect(container).toHaveTextContent(content)
    expect(items).toHaveTextContent('Tab1Tab2Tab3')
    expect(activeBar).toBeInTheDocument()
  })

  it('should not render activeBar when have only one Tab', () => {
    const { queryByTestId } = render(
      <Tabs
        items={
          <>
            <TabsItem>Tab1</TabsItem>
          </>
        }
        name="tabsTest"
      >
        <TabsPanels />
      </Tabs>
    )
    expect(queryByTestId('activeBar')).not.toBeInTheDocument()
  })
})
