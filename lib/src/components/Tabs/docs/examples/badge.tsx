import { Tab, useTab } from '@/components/Tabs'

const Example = () => {
  const tab = useTab({ defaultSelectedId: 'tab2' })

  return (
    <>
      <Tab.List aria-label="Tabs" store={tab}>
        <Tab badge="new" id="tab1" store={tab}>
          Tab 1
        </Tab>
        <Tab badge="old" id="tab2" store={tab}>
          Tab 2
        </Tab>
        <Tab badge={3} id="tab3" store={tab}>
          Tab 3
        </Tab>
      </Tab.List>
    </>
  )
}

export default Example
