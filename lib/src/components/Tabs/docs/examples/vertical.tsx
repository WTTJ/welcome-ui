import { Tabs, useTab } from '@/components/Tabs'

const Example = () => {
  const tab = useTab({ defaultSelectedId: 'tab1', orientation: 'vertical' })

  return (
    <Tabs aria-label="Tabs" className="w-300 mx-auto" store={tab}>
      <Tabs.Tab id="tab1" store={tab}>
        Tab 1
      </Tabs.Tab>
      <Tabs.Tab badge={3} className="justify-between" id="tab2" store={tab}>
        <span>Tab 2</span>
      </Tabs.Tab>
      <Tabs.Tab badge={1} className="justify-between" icon="plus" id="tab3" store={tab}>
        Tab 3 with a very long text that gets truncated
      </Tabs.Tab>
    </Tabs>
  )
}

export default Example
