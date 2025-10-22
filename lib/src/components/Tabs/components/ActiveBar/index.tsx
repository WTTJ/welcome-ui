import { useState } from 'react'

import { classNames } from '@/utils'
import { useIsomorphicLayoutEffect } from '@/utils/use-isomorphic-layout-effect'
import { useViewportSize } from '@/utils/use-viewport'

import type { ActiveBarProps, ActiveBarReturn } from '../../types'
import { getParentScale } from '../../utils'

import styles from './active-bar.module.scss'

function useActiveBar({ activeTab, listRef, orientation }: ActiveBarProps): ActiveBarReturn {
  const [state, setState] = useState({})
  const { height: viewportHeight, width: viewportWidth } = useViewportSize()

  useIsomorphicLayoutEffect(() => {
    const list: HTMLElement = listRef.current
    if (!list || !activeTab) return

    const listRect = list.getBoundingClientRect()
    const activeTabRect = activeTab.getBoundingClientRect()
    const scale = getParentScale(list)

    if (orientation === 'vertical') {
      const top = activeTabRect.top - listRect.top
      const height = activeTabRect.height
      setState({
        offset: top,
        orientation,
        size: height,
      })
    } else {
      const left = (activeTabRect.left - listRect.left + list.scrollLeft) / scale
      const width = activeTabRect.width / scale

      setState({
        offset: isNaN(left) ? 0 : left,
        orientation,
        size: isNaN(width) ? 0 : width,
      })
    }
  }, [listRef, activeTab, viewportWidth, viewportHeight, orientation])

  return state
}

const cx = classNames(styles)

export const ActiveBar = ({ activeTab, listRef, orientation }: ActiveBarProps) => {
  const activeBar = useActiveBar({ activeTab, listRef, orientation })

  const style = {
    '--activeBarOffset': `${activeBar.offset}px`,
    '--activeBarSize': `${activeBar.size}px`,
  } as React.CSSProperties

  return <span className={cx('root', `orientation-${orientation}`)} style={style} />
}
