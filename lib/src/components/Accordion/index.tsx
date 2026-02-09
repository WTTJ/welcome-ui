import { Disclosure, DisclosureContent, DisclosureProvider } from '@ariakit/react'
import type { ComponentPropsWithRef } from 'react'
import { createContext, forwardRef, useContext } from 'react'

import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import { Button } from '../Button'
import { Tag } from '../Tag'
import type { TagOptions } from '../Tag/types'

import styles from './accordion.module.scss'
import type { AccordionProps } from './types'

const cx = classNames(styles)

const AccordionContext = createContext<{ size?: AccordionProps['size'] }>({})

export const useAccordionContext = () => useContext(AccordionContext)

//TODO(isaac): merge providers
const AccordionComponent = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, size = 'sm', store, ...rest }, ref) => {
    return (
      <AccordionContext.Provider value={{ size }}>
        <DisclosureProvider store={store}>
          <div className={cx('root', className)} ref={ref} {...rest}>
            {children}
          </div>
        </DisclosureProvider>
      </AccordionContext.Provider>
    )
  }
)

AccordionComponent.displayName = 'Accordion'

const AccordionDisclosure = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithRef<'button'> & { actions?: React.ReactNode }
>(
  (
    { actions, children, className, 'data-testid': dataTestId = 'accordion-disclosure', ...rest },
    ref
  ) => {
    const { size } = useAccordionContext()
    const arrowButtonVariant = size === 'lg' ? 'secondary' : 'tertiary'
    const buttonSize = size === 'lg' ? 'md' : 'sm'

    return (
      <Disclosure
        ref={ref}
        {...rest}
        data-testid={dataTestId}
        render={props => <div {...props} className={cx('accordion-disclosure', className)} />}
        role="button"
        tabIndex={0}
      >
        <div className={cx('accordion-disclosure-wrapper')}>{children}</div>
        <div className={cx('accordion-disclosure-actions')}>
          {actions}
          <Button
            className={cx('accordion-disclosure-arrow-button')}
            data-testid={`${dataTestId}-button`}
            size={buttonSize}
            variant={arrowButtonVariant}
          >
            <Icon className={cx('accordion-disclosure-arrow-icon')} name="angle-down" size="lg" />
          </Button>
        </div>
      </Disclosure>
    )
  }
)

AccordionDisclosure.displayName = 'Accordion.Disclosure'

const AccordionHeaderWithTags = forwardRef<HTMLDivElement, ComponentPropsWithRef<'div'>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={cx('accordion-header', className)} ref={ref} {...rest}>
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
    return (
      <DisclosureContent className={cx('accordion-content', className)} ref={ref} {...rest}>
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

const AccordionActions = forwardRef<HTMLDivElement, ComponentPropsWithRef<'div'>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={cx('accordion-actions', className)} ref={ref} {...rest}>
        {children}
      </div>
    )
  }
)

AccordionActions.displayName = 'Accordion.Actions'

export const Accordion = Object.assign(AccordionComponent, {
  Actions: AccordionActions,
  Content: AccordionContent,
  Disclosure: AccordionDisclosure,
  HeaderWithTags: AccordionHeaderWithTags,
  Subtitle: AccordionSubtitle,
  Tag: AccordionTag,
  Tags: AccordionTags,
  Title: AccordionTitle,
})

export { useDisclosureStore as useAccordion } from '@ariakit/react'
