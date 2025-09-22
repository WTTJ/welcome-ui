import { HeartIcon } from '@/components/Icon'
import { Tab, useTab } from '@/components/Tabs'
import { Badge } from '@old/Badge'

const Example = () => {
  const tab = useTab({ defaultSelectedId: 'tab2' })
  const selectedId = tab.useState('selectedId')

  const getVariant = (item: string) => (selectedId === item ? 'primary' : 'default')

  return (
    <>
      <Tab.List aria-label="Tabs" store={tab}>
        <Tab id="tab1" store={tab}>
          Tab 1<Badge variant={getVariant('tab1')}>new</Badge>
        </Tab>
        <Tab id="tab2" store={tab}>
          Tab 2<Badge variant={getVariant('tab2')}>old</Badge>
          <Badge variant={getVariant('tab2')}>2</Badge>
        </Tab>
        <Tab id="tab3" store={tab}>
          Tab 3
          <HeartIcon />
        </Tab>
        <Tab id="tab4" store={tab}>
          <img src="https://cdn.welcometothejungle.com/wttj-front/production/assets/images/logos/wttj.svg?v=3a3dbd7122a01600fb67e66b889bb47c" />{' '}
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
    </>
  )
}

export default Example
