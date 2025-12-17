import { Tab as AriakitTab, TabList as AriakitTabList } from '@ariakit/react'
import { forwardRef, useState } from 'react'

import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import type {
  ActionButtonProps,
  HeaderLeftActionsProps,
  HeaderProps,
  HeaderRightActionsProps,
  HeaderTabsProps,
  HeaderTitleProps,
} from '../types'
import windowStyles from '../window.module.scss'

const cx = classNames(windowStyles)

const Button = ({ 'aria-label': ariaLabel, className, icon, onClick }: ActionButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      className={cx('header-action-button', className)}
      onClick={onClick}
      type="button"
    >
      <Icon name={icon} />
    </button>
  )
}

const CloseButton = ({ onClick }: Omit<ActionButtonProps, 'icon'>) => {
  return (
    <Button
      aria-label="Close window"
      className={cx('header-close-button')}
      icon="times"
      onClick={onClick}
    />
  )
}

const Tabs = ({ items, store }: HeaderTabsProps) => {
  return (
    <AriakitTabList className={cx('header-tabs')} store={store}>
      {items.map(item => (
        <AriakitTab className={cx('header-tab-item')} id={item.id} key={item.id} store={store}>
          <Icon name={item.icon} />
          <Text variant="label-sm">{item.title}</Text>
        </AriakitTab>
      ))}
    </AriakitTabList>
  )
}

const RightActions = ({ children, isClosable = false, onClose }: HeaderRightActionsProps) => {
  const handleCloseWindow = () => {
    onClose?.()
  }

  return (
    <div className={cx('header-actions')}>
      {children}
      {isClosable ? <CloseButton onClick={handleCloseWindow} /> : null}
    </div>
  )
}

const LeftActions = ({ isExpandable = false, onExpandChange }: HeaderLeftActionsProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpandWindow = () => {
    const newExpanded = !isExpanded
    setIsExpanded(newExpanded)
    onExpandChange?.(newExpanded)
  }

  return (
    <div className={cx('header-actions')}>
      {isExpandable ? (
        <button
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Collapse window' : 'Expand window'}
          className={cx('header-action-button')}
          onClick={handleExpandWindow}
          type="button"
        >
          <Icon name={isExpanded ? 'compress-alt' : 'arrow-resize-diagonal'} />
        </button>
      ) : null}
    </div>
  )
}

const Title = ({ as = 'h2', className, title }: HeaderTitleProps) => {
  return (
    <Text as={as} className={cx('header-title', className)} variant="body-md-strong">
      {title}
    </Text>
  )
}

/**
 * @name Window.Header
 */
export const HeaderComponent = forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, ...rest }, ref) => {
    return (
      <header className={cx('header')} ref={ref} {...rest}>
        {children}
      </header>
    )
  }
)

HeaderComponent.displayName = 'Window.Header'

export const Header = Object.assign(HeaderComponent, {
  Button,
  LeftActions,
  RightActions,
  Tabs,
  Title,
})
