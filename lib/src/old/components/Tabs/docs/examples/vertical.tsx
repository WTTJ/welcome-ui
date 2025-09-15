import { Box } from '@old/Box'
import { Tab, useTab } from '@old/Tabs'

const Example = () => {
  const tab = useTab({ defaultSelectedId: 'tab2', orientation: 'vertical' })

  return (
    <Box display="flex">
      <Tab.List aria-label="Tabs" mr="lg" store={tab} w={200}>
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
    </Box>
  )
}

export default Example
