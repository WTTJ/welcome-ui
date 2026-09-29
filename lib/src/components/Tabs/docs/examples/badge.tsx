import { Tabs, useTab } from '@/components/Tabs'
import { Text } from '@/components/Text'

const Example = () => {
  const tab = useTab({ defaultSelectedId: 'tab2' })
  const mdTab = useTab({ defaultSelectedId: 'tab1' })

  return (
    <div className="flex flex-col gap-xl">
      <div className="flex flex-col gap-sm">
        <Text variant="heading-xs">tab with default badge variant "warm"</Text>
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
      </div>

      <div className="flex flex-col gap-sm">
        <Text variant="heading-xs">medium tab with badge variant "brand"</Text>
        <Tabs aria-label="Tabs" size="md" store={mdTab}>
          <Tabs.Tab badge="new" badgeVariant="brand" id="tab1" store={mdTab}>
            Tab 1
          </Tabs.Tab>
          <Tabs.Tab badge="old" badgeVariant="brand" id="tab2" store={mdTab}>
            Tab 2
          </Tabs.Tab>
          <Tabs.Tab badge={3} badgeVariant="brand" id="tab3" store={mdTab}>
            Tab 3
          </Tabs.Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default Example
