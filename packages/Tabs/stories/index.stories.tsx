import React from 'react'
import { styled } from '@welcome-ui/panda/jsx'
import { TextPanda } from '@welcome-ui/text'

import { TabPanda, useTab } from '../src'

export const Tabs = () => {
  const tab = useTab({ defaultSelectedId: 'tab1' })

  return (
    <div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Variants
        </TextPanda>
        <styled.div>
          <TabPanda.List aria-label="Tabs" store={tab}>
            <TabPanda id="tab1" store={tab}>
              Tab 1
            </TabPanda>
            <TabPanda id="tab2" store={tab}>
              Tab 2
            </TabPanda>
            <TabPanda id="tab3" store={tab}>
              Tab 3
            </TabPanda>
            <TabPanda id="tab4" store={tab}>
              Tab 4
            </TabPanda>
            <TabPanda disabled id="tab5" store={tab}>
              Tab 5
            </TabPanda>
          </TabPanda.List>
          <TabPanda.Panel store={tab} tabId="tab1">
            TabPanda.Panel 1
          </TabPanda.Panel>
          <TabPanda.Panel store={tab} tabId="tab2">
            TabPanda.Panel 2
          </TabPanda.Panel>
          <TabPanda.Panel store={tab} tabId="tab3">
            TabPanda.Panel 3
          </TabPanda.Panel>
          <TabPanda.Panel store={tab} tabId="tab4">
            TabPanda.Panel 4
          </TabPanda.Panel>
          <TabPanda.Panel disabled store={tab} tabId="tab5">
            TabPanda.Panel 5
          </TabPanda.Panel>
        </styled.div>
      </styled.div>
    </div>
  )
}
