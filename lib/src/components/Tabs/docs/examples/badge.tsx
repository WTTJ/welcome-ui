import { Tabs, useTab } from '@/components/Tabs'

const Example = () => {
  const tab = useTab({ defaultSelectedId: 'tab2' })

  return (
    <div className="flex flex-col gap-xl">
      <Tabs aria-label="Tabs" store={tab}>
        <Tabs.Tab badge="new" id="tab1" store={tab}>
          Tab 1
        </Tabs.Tab>
        <Tabs.Tab badge="old" id="tab2" store={tab}>
          Tab 2
        </Tabs.Tab>
        <Tabs.Tab badge={3} id="tab3" store={tab}>
          Tab 3
        </Tabs.Tab>
      </Tabs>
      <Tabs aria-label="Tabs" size="md" store={tab}>
        <Tabs.Tab badge="new" id="tab1" store={tab}>
          Tab 1
        </Tabs.Tab>
        <Tabs.Tab badge="old" id="tab2" store={tab}>
          Tab 2
        </Tabs.Tab>
        <Tabs.Tab badge={3} id="tab3" store={tab}>
          Tab 3
        </Tabs.Tab>
      </Tabs>
    </div>
  )
}

export default Example
