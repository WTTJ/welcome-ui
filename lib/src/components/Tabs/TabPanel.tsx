import { TabPanel as AriakitTabPanel } from '@ariakit/react'
import { forwardRef } from 'react'

import type { TabPanelProps } from './types'

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(({ children, ...rest }, ref) => {
  return (
    <AriakitTabPanel ref={ref} {...rest}>
      {children}
    </AriakitTabPanel>
  )
})

TabPanel.displayName = 'Tab.Panel'
