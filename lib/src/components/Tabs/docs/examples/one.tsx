import * as React from 'react'
import { Tab, useTab } from '@welcome-ui/tabs'

const Example = () => {
  const tab = useTab({ defaultSelectedId: 'tab1' })

  return (
    <>
      <Tab.List aria-label="Tabs" store={tab}>
        <Tab id="tab1" store={tab}>
          Tab 1
        </Tab>
      </Tab.List>
      <Tab.Panel store={tab} tabId="tab1">
        Tab.Panel 1
      </Tab.Panel>
    </>
  )
}

export default Example
