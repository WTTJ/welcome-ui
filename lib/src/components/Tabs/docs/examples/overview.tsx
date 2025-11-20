import { Tab, useTab } from '@/components/Tabs'

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
    </>
  )
}

export default Example
