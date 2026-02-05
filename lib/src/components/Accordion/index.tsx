import { Disclosure, DisclosureContent, DisclosureProvider } from '@ariakit/react'
import type { ComponentPropsWithRef } from 'react'
import { forwardRef } from 'react'

import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import { Button } from '../Button'

import styles from './accordion.module.scss'
import type { AccordionProps } from './types'

const cx = classNames(styles)

const AccordionComponent = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, store, ...rest }, ref) => {
    return (
      <DisclosureProvider store={store}>
        <div className={cx('root', className)} ref={ref} {...rest}>
          {children}
        </div>
      </DisclosureProvider>
    )
  }
)

AccordionComponent.displayName = 'Accordion'

const AccordionDisclosure = forwardRef<
  HTMLDivElement,
  ComponentPropsWithRef<'div'> & { actions?: React.ReactNode }
>(({ actions, children, className, ...rest }, ref) => {
  return (
    <div className={cx('accordion-disclosure', className)} ref={ref} {...rest}>
      <div className={cx('accordion-disclosure-wrapper')}>{children}</div>
      <div className={cx('accordion-disclosure-actions')}>
        {actions}
        <Disclosure
          render={props => (
            <Button
              className={cx('accordion-disclosure-arrow-button')}
              variant="tertiary"
              {...props}
            />
          )}
        >
          <Icon className={cx('accordion-disclosure-arrow-icon')} name="angle-down" size="lg" />
        </Disclosure>
      </div>
    </div>
  )
})

AccordionDisclosure.displayName = 'Accordion.Disclosure'

const AccordionHeading = forwardRef<HTMLDivElement, ComponentPropsWithRef<'div'>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={cx('accordion-heading', className)} ref={ref} {...rest}>
        {children}
      </div>
    )
  }
)

AccordionHeading.displayName = 'Accordion.Heading'

const AccordionTitle = forwardRef<HTMLDivElement, ComponentPropsWithRef<'div'>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <Text
        className={cx('accordion-title', className)}
        ref={ref}
        variant="heading-sm-strong"
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
  Heading: AccordionHeading,
  Subtitle: AccordionSubtitle,
  Title: AccordionTitle,
})

export { useDisclosureStore as useAccordion } from '@ariakit/react'
