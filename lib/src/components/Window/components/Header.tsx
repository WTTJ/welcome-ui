'use client'
import { Tab as AriakitTab, TabList as AriakitTabList } from '@ariakit/react'
import { forwardRef, useState } from 'react'

import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'
import type { As, PropsWithAs } from '@/utils'
import { classNames, forwardRefWithAs } from '@/utils'

import type {
  ActionButtonProps,
  HeaderLeftActionsProps,
  HeaderProps,
  HeaderRightActionsProps,
  HeaderTabItem,
  HeaderTabsProps,
  HeaderTitleProps,
} from '../types'
import windowStyles from '../window.module.scss'

const cx = classNames(windowStyles)

const Button = ({
  'aria-label': ariaLabel,
  className,
  icon,
  onClick,
  ...rest
}: PropsWithAs<As, ActionButtonProps>) => {
  return (
    <button
      aria-label={ariaLabel}
      className={cx('header-action-button', className)}
      onClick={onClick}
      type="button"
      {...rest}
    >
      <Icon name={icon} />
    </button>
  )
}

const CloseButton = ({
  as,
  className,
  onClick,
}: PropsWithAs<As, Omit<ActionButtonProps, 'icon'>>) => {
  return (
    <Button
      aria-label="Close window"
      as={as}
      className={cx('header-close-button', className)}
      icon="times"
      onClick={onClick}
    />
  )
}

const Tabs = ({ children, store }: HeaderTabsProps) => {
  return (
    <AriakitTabList className={cx('header-tabs')} store={store}>
      {children}
    </AriakitTabList>
  )
}

const Tab = forwardRefWithAs<HeaderTabItem, 'button'>(
  ({ as: Component, children, icon, id, store, ...rest }, ref) => {
    return (
      <AriakitTab
        className={cx('header-tab-item')}
        id={id}
        key={id}
        ref={ref}
        render={Component ? <Component /> : undefined}
        store={store}
        {...rest}
      >
        {icon ? <Icon name={icon} /> : null}
        <Text variant="label-sm">{children}</Text>
      </AriakitTab>
    )
  }
)

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

const Title = ({ as, className, title }: HeaderTitleProps) => {
  return (
    <Text as={as} className={cx('header-title', className)} variant="body-md-strong">
      {title}
    </Text>
  )
}

export const HeaderComponent = forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <header className={cx('header', className)} ref={ref} {...rest}>
        {children}
      </header>
    )
  }
)

HeaderComponent.displayName = 'Window.Header'

export const Header = Object.assign(HeaderComponent, {
  Button,
  CloseButton,
  LeftActions,
  RightActions,
  Tab,
  Tabs,
  Title,
})
