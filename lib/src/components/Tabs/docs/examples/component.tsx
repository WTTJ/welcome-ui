import * as React from 'react'
import { Tab, useTab } from 'welcome-ui/Tabs'

const Example = () => {
  const tab = useTab({ defaultSelectedId: 'tab1' })

  return (
    <>
      <Tab.List aria-label="Tabs" store={tab}>
        <Tab as="a" id="tab1" store={tab}>
          Tab 1
        </Tab>
        <Tab as="a" id="tab2" store={tab}>
          Tab 2
        </Tab>
        <Tab as="a" id="tab3" store={tab}>
          Tab 3
        </Tab>
      </Tab.List>
      <Tab.Panel store={tab} tabId="tab1">
        Tab.Panel 1
      </Tab.Panel>
      <Tab.Panel store={tab} tabId="tab2">
        Tab.Panel 2
      </Tab.Panel>
      <Tab.Panel store={tab} tabId="tab3">
        Tab.Panel 3
      </Tab.Panel>
    </>
  )
}

export default Example
