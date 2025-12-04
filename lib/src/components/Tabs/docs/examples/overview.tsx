import { Tabs, useTab } from '@/components/Tabs'

const Example = () => {
  const tab = useTab({ defaultSelectedId: 'tab1' })

  return (
    <>
      <div>
        <Tabs aria-label="Tabs" store={tab}>
          <Tabs.Tab id="tab1" store={tab}>
            Tab 1
          </Tabs.Tab>
          <Tabs.Tab id="tab2" store={tab}>
            Tab 2
          </Tabs.Tab>
          <Tabs.Tab id="tab3" store={tab}>
            Tab 3
          </Tabs.Tab>
          <Tabs.Tab id="tab4" store={tab}>
            Tab 4
          </Tabs.Tab>
          <Tabs.Tab disabled id="tab5" store={tab}>
            Tab 5
          </Tabs.Tab>
        </Tabs>
      </div>

      <div className="w-full border border-neutral-20 p-lg rounded-md">
        <Tabs.Panel store={tab} tabId="tab1">
          Content for Tab 1
        </Tabs.Panel>
        <Tabs.Panel store={tab} tabId="tab2">
          Content for Tab 2
        </Tabs.Panel>
        <Tabs.Panel store={tab} tabId="tab3">
          Content for Tab 3
        </Tabs.Panel>
        <Tabs.Panel store={tab} tabId="tab4">
          Content for Tab 4
        </Tabs.Panel>
        <Tabs.Panel store={tab} tabId="tab5">
          Content for Tab 5
        </Tabs.Panel>
      </div>
    </>
  )
}

export default Example
