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
        <Tab id="tab4" store={tab}>
          Tab 4
        </Tab>
        <Tab disabled id="tab5" store={tab}>
          Tab 5
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
      <Tab.Panel store={tab} tabId="tab4">
        Tab.Panel 4
      </Tab.Panel>
      <Tab.Panel disabled store={tab} tabId="tab5">
        Tab.Panel 5
      </Tab.Panel>
    </>
  )
}

export default Example
