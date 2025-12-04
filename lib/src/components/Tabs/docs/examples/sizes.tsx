import { Tabs, useTab } from '@/components/Tabs'

const Example = () => {
  const tab = useTab({ defaultSelectedId: 'tab1' })

  return (
    <>
      <Tabs aria-label="Tabs" size="lg" store={tab}>
        <Tabs.Tab id="tab1" store={tab}>
          Tab 1
        </Tabs.Tab>
        <Tabs.Tab id="tab2" store={tab}>
          Tab 2
        </Tabs.Tab>
        <Tabs.Tab id="tab3" store={tab}>
          Tab 3
        </Tabs.Tab>
      </Tabs>
      {/* md size */}
      <Tabs aria-label="Tabs" size="md" store={tab}>
        <Tabs.Tab id="tab1" store={tab}>
          Tab 1
        </Tabs.Tab>
        <Tabs.Tab id="tab2" store={tab}>
          Tab 2
        </Tabs.Tab>
        <Tabs.Tab id="tab3" store={tab}>
          Tab 3
        </Tabs.Tab>
      </Tabs>
    </>
  )
}

export default Example
