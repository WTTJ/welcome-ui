import { Disclosure, DisclosureContent } from '@ariakit/react'
import type { ComponentPropsWithRef } from 'react'
import { createContext, forwardRef, useContext } from 'react'

import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import { Button } from '../Button'
import type { ButtonProps } from '../Button/types'
import type { IconOptions, IconProps } from '../Icon/types'
import { Tag } from '../Tag'
import type { TagOptions } from '../Tag/types'

import styles from './accordion.module.scss'
import type { AccordionProps } from './types'

const cx = classNames(styles)

const AccordionContext = createContext<{
  size?: AccordionProps['size']
  store?: AccordionProps['store']
}>({})

export const useAccordionContext = () => useContext(AccordionContext)

const AccordionComponent = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, size = 'sm', store, ...rest }, ref) => {
    return (
      <AccordionContext.Provider value={{ size, store }}>
        <div className={cx('root', className)} ref={ref} {...rest}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  }
)

AccordionComponent.displayName = 'Accordion'

const buttonSizeMap: Record<AccordionProps['size'], ButtonProps['size']> = {
  lg: 'md',
  md: 'sm',
  sm: 'sm',
}

const AccordionDisclosure = forwardRef<HTMLButtonElement, ComponentPropsWithRef<'button'>>(
  ({ children, className, 'data-testid': dataTestId = 'accordion-disclosure', ...rest }, ref) => {
    const { size, store } = useAccordionContext()
    const arrowButtonVariant = size === 'lg' ? 'secondary' : 'tertiary'
    const buttonSize = buttonSizeMap[size]

    return (
      <Disclosure
        ref={ref}
        {...rest}
        data-testid={dataTestId}
        render={props => <div {...props} className={cx('accordion-disclosure', className)} />}
        role="button"
        store={store}
        tabIndex={0}
      >
        {children}
        <Button
          className={cx('accordion-disclosure-actions')}
          data-testid={`${dataTestId}-button`}
          size={buttonSize}
          variant={arrowButtonVariant}
        >
          <Icon className={cx('accordion-disclosure-arrow-icon')} name="angle-down" size="lg" />
        </Button>
      </Disclosure>
    )
  }
)

AccordionDisclosure.displayName = 'Accordion.Disclosure'

const AccordionHeader = forwardRef<HTMLDivElement, ComponentPropsWithRef<'div'>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={cx('accordion-header', className)} ref={ref} {...rest}>
        {children}
      </div>
    )
  }
)

const AccordionHeaderWithTags = forwardRef<HTMLDivElement, ComponentPropsWithRef<'div'>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={cx('accordion-header-with-tags', className)} ref={ref} {...rest}>
        {children}
      </div>
    )
  }
)

AccordionHeaderWithTags.displayName = 'Accordion.HeaderWithTags'

const AccordionTags = forwardRef<HTMLDivElement, ComponentPropsWithRef<'div'>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={cx('accordion-tags', className)} ref={ref} {...rest}>
        {children}
      </div>
    )
  }
)

AccordionTags.displayName = 'Accordion.Tags'

const iconSizeMap: Record<AccordionProps['size'], IconOptions['size']> = {
  lg: 'xl',
  md: 'lg',
  sm: 'md',
}

const AccordionIcon = ({ className, name, ...rest }: IconProps) => {
  const { size } = useAccordionContext()
  const iconSize = iconSizeMap[size]

  return <Icon className={cx('accordion-icon', className)} name={name} size={iconSize} {...rest} />
}

const titleVariantMap = {
  lg: 'heading-md-strong',
  md: 'heading-sm',
  sm: 'heading-xs',
} as const

const AccordionTitle = forwardRef<HTMLDivElement, ComponentPropsWithRef<'div'>>(
  ({ children, className, ...rest }, ref) => {
    const { size } = useAccordionContext()

    return (
      <Text
        className={cx('accordion-title', className)}
        ref={ref}
        variant={titleVariantMap[size]}
        {...rest}
      >
        {children}
      </Text>
    )
  }
)

AccordionTitle.displayName = 'Accordion.Title'

const AccordionSubtitle = forwardRef<HTMLDivElement, ComponentPropsWithRef<'div'>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <Text className={cx('accordion-subtitle', className)} ref={ref} variant="body-md" {...rest}>
        {children}
      </Text>
    )
  }
)

AccordionSubtitle.displayName = 'Accordion.Subtitle'

const AccordionContent = forwardRef<HTMLDivElement, ComponentPropsWithRef<'div'>>(
  ({ children, className, ...rest }, ref) => {
    const { store } = useAccordionContext()
    return (
      <DisclosureContent
        className={cx('accordion-content', className)}
        ref={ref}
        store={store}
        {...rest}
      >
        <div className={cx('accordion-content-wrapper')}>{children}</div>
      </DisclosureContent>
    )
  }
)

AccordionContent.displayName = 'Accordion.Content'

const AccordionTag = forwardRef<HTMLDivElement, ComponentPropsWithRef<'div'> & TagOptions>(
  ({ children, className, ...rest }, ref) => {
    const { size } = useAccordionContext()

    const tagSize = size === 'lg' ? 'lg' : 'md'

    return (
      <Tag className={cx('accordion-tag', className)} ref={ref} size={tagSize} {...rest}>
        {children}
      </Tag>
    )
  }
)

AccordionTag.displayName = 'Accordion.Tag'

const AccordionAction = forwardRef<HTMLButtonElement, ComponentPropsWithRef<'button'>>(
  ({ children, className, onClick, ...rest }, ref) => {
    const { size } = useAccordionContext()
    const buttonSize = buttonSizeMap[size]

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()
      onClick?.(e)
    }
    return (
      <Button
        className={cx('accordion-action', className)}
        onClick={handleClick}
        ref={ref}
        size={buttonSize}
        variant="secondary"
        {...rest}
      >
        {children}
      </Button>
    )
  }
)

AccordionAction.displayName = 'Accordion.Action'

export const Accordion = Object.assign(AccordionComponent, {
  Action: AccordionAction,
  Content: AccordionContent,
  Disclosure: AccordionDisclosure,
  Header: AccordionHeader,
  HeaderWithTags: AccordionHeaderWithTags,
  Icon: AccordionIcon,
  Subtitle: AccordionSubtitle,
  Tag: AccordionTag,
  Tags: AccordionTags,
  Title: AccordionTitle,
})

export { useDisclosureStore as useAccordion } from '@ariakit/react'
