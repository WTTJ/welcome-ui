import { Tab, useTab } from '@/components/Tabs'

const Example = () => {
  const tab = useTab({ defaultSelectedId: 'tab1' })

  return (
    <>
      <div>
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
      </div>

      <div className="w-full border border-neutral-20 p-lg rounded-md">
        <Tab.Panel store={tab} tabId="tab1">
          Content for Tab 1
        </Tab.Panel>
        <Tab.Panel store={tab} tabId="tab2">
          Content for Tab 2
        </Tab.Panel>
        <Tab.Panel store={tab} tabId="tab3">
          Content for Tab 3
        </Tab.Panel>
        <Tab.Panel store={tab} tabId="tab4">
          Content for Tab 4
        </Tab.Panel>
        <Tab.Panel store={tab} tabId="tab5">
          Content for Tab 5
        </Tab.Panel>
      </div>
    </>
  )
}

export default Example
