import { Tab as AriakitTab, TabList as AriakitTabList } from '@ariakit/react'
import { forwardRef, useState } from 'react'

import { Icon } from '@/components/Icon'
import type { UseTab } from '@/components/Tabs'
import { Text } from '@/components/Text'
import type { PropsWithAs } from '@/utils'
import { classNames } from '@/utils'

import type { ActionButtonProps, HeaderProps } from '../types'
import windowStyles from '../window.module.scss'

const cx = classNames(windowStyles)

const Button = ({
  'aria-label': ariaLabel,
  className,
  icon,
  onClick,
}: ActionButtonProps & { icon: string }) => {
  return (
    <button
      aria-label={ariaLabel}
      className={cx('button', className)}
      onClick={onClick}
      type="button"
    >
      <Icon name={icon} />
    </button>
  )
}

const CloseButton = ({ onClick }: ActionButtonProps) => {
  return (
    <Button
      aria-label="Close window"
      className={cx('close-button')}
      icon="times"
      onClick={onClick}
    />
  )
}

const Tabs = ({
  items,
  store,
}: {
  items: { icon: string; id: string; title: string }[]
  store: UseTab
}) => {
  return (
    <AriakitTab store={store}>
      <AriakitTabList className={cx('tabs')} store={store}>
        {items.map(item => (
          <AriakitTab className={cx('tab-item')} id={item.id} store={store}>
            <Icon name={item.icon} />
            {item.title}
          </AriakitTab>
        ))}
      </AriakitTabList>
    </AriakitTab>
  )
}

const RightActions = ({
  children,
  isClosable = false,
}: {
  children?: React.ReactNode
  isClosable: boolean
}) => {
  const [isClosed, setIsClosed] = useState(false)

  const handleCloseWindow = () => {
    setIsClosed(!isClosed)
  }

  return (
    <div className={cx('header-actions')}>
      {children}
      {isClosable ? <CloseButton onClick={handleCloseWindow} /> : null}
    </div>
  )
}

const LeftActions = ({
  handleDragAndDrop,
  isDraggable = false,
  isExpandable = false,
}: {
  handleDragAndDrop?: VoidFunction
  isDraggable?: boolean
  isExpandable?: boolean
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpandWindow = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={cx('header-actions')}>
      {isDraggable ? (
        <Button aria-label="Drag window" icon="draggabledots" onClick={handleDragAndDrop} />
      ) : null}
      {isExpandable ? (
        <Button
          aria-label="Expand window"
          icon={isExpanded ? 'compress-alt' : 'arrow-resize-diagonal'}
          onClick={handleExpandWindow}
        />
      ) : null}
    </div>
  )
}

const Title = ({ as = 'h2', title }: PropsWithAs<'h2', { title: JSX.Element | string }>) => {
  return (
    <Text as={as} variant="body-md-strong">
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

// Nested exports
export const Header = Object.assign(HeaderComponent, {
  Button,
  LeftActions,
  RightActions,
  Tabs,
  Title,
})

// TODO after lunch:
// - Global store like modal
// - Add elements in the header example with more action for future
// - tabs style
// - body variants: xs, sm, md, lg, xl
// - free text, box text, media
// - test
