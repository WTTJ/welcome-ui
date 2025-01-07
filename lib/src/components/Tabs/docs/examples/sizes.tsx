import { Tab, useTab } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  const tab = useTab({ defaultSelectedId: 'tab1' })

  return (
    <>
      <Tab.List aria-label="Tabs" store={tab}>
        <Tab id="tab1" store={tab}>
          Tab 1
        </Tab>
        <Tab id="tab2" store={tab}>
          Tab 2
        </Tab>
        <Tab id="tab3" store={tab}>
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
      {/* sm size */}
      <Tab.List aria-label="Tabs" mt="xxl" size="sm" store={tab}>
        <Tab id="tab1" store={tab}>
          Tab 1
        </Tab>
        <Tab id="tab2" store={tab}>
          Tab 2
        </Tab>
        <Tab id="tab3" store={tab}>
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
