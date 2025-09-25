import { Tab as AriakitTab } from '@ariakit/react'

import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import { TabList } from './components/TabList'
import { TabPanel } from './components/TabPanel'
import styles from './tabs.module.scss'
import type { TabProps } from './types'

const cx = classNames(styles)

export const TabComponent = forwardRefWithAs<TabProps, 'button'>(
  ({ as: As, children, className, id, store, ...rest }, ref) => {
    return (
      <AriakitTab
        className={cx('root', className)}
        id={id}
        ref={ref}
        render={As ? <As /> : undefined}
        store={store}
        {...rest}
      >
        {children}
      </AriakitTab>
    )
  }
)

export const Tab = Object.assign(TabComponent, { List: TabList, Panel: TabPanel })

export { useTabStore as useTab } from '@ariakit/react'

export type {
  TabStore as UseTab,
  TabStoreProps as UseTabProps,
  TabStoreState as UseTabState,
} from '@ariakit/react'
