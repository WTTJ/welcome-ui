import { Tabs, useTab } from '@/components/Tabs'

const Example = () => {
  const tab = useTab({ defaultSelectedId: 'tab1' })

  return (
    <>
      <Tabs aria-label="Tabs" store={tab}>
        <Tabs.Tab icon="folder-full" iconColor="blue" id="tab1" store={tab}>
          Tab 1
        </Tabs.Tab>
        <Tabs.Tab icon="folder-full" iconColor="violet" id="tab2" store={tab}>
          Tab 2
        </Tabs.Tab>
        <Tabs.Tab icon="folder-full" iconColor="pink" id="tab3" store={tab}>
          Tab 3
        </Tabs.Tab>
        <Tabs.Tab icon="folder-full" iconColor="teal" id="tab4" store={tab}>
          Tab 4
        </Tabs.Tab>
        <Tabs.Tab icon="folder-full" iconColor="orange" id="tab5" store={tab}>
          Tab 5
        </Tabs.Tab>
        <Tabs.Tab icon="folder-full" iconColor="warm" id="tab6" store={tab}>
          Tab 6
        </Tabs.Tab>
      </Tabs>
    </>
  )
}

export default Example
