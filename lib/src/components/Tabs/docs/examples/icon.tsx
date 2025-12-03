import { Icon } from '@/components/Icon'
import { Tab, useTab } from '@/components/Tabs'

const Example = () => {
  const tab = useTab({ defaultSelectedId: 'tab1' })

  return (
    <>
      <Tab.List aria-label="Tabs" store={tab}>
        <Tab icon="folder" iconColor="blue" id="tab1" store={tab}>
          Tab 1
        </Tab>
        <Tab icon="folder" iconColor="violet" id="tab2" store={tab}>
          Tab 2
        </Tab>
        <Tab icon="folder" iconColor="pink" id="tab3" store={tab}>
          Tab 3
        </Tab>
        <Tab icon="folder" iconColor="teal" id="tab4" store={tab}>
          Tab 4
        </Tab>
        <Tab icon="folder" iconColor="orange" id="tab5" store={tab}>
          Tab 5
        </Tab>
        <Tab icon={<Icon name="heart" />} iconColor="orange" id="tab6" store={tab}>
          Tab 6
        </Tab>
      </Tab.List>
    </>
  )
}

export default Example
