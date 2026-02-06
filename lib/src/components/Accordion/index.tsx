import { Disclosure, DisclosureContent, DisclosureProvider } from '@ariakit/react'
import type { ComponentPropsWithRef } from 'react'
import { createContext, forwardRef, useContext } from 'react'

import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import { Button } from '../Button'

import styles from './accordion.module.scss'
import type { AccordionProps } from './types'

const cx = classNames(styles)

const AccordionContext = createContext<{ size?: AccordionProps['size'] }>({})

export const useAccordionContext = () => useContext(AccordionContext)

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
  HTMLDivElement,
  ComponentPropsWithRef<'div'> & { actions?: React.ReactNode }
>(
  (
    { actions, children, className, 'data-testid': dataTestId = 'accordion-disclosure', ...rest },
    ref
  ) => {
    const { size } = useAccordionContext()
    const arrowButtonVariant = size === 'lg' ? 'secondary' : 'tertiary'
    const buttonSize = size === 'lg' ? 'md' : 'sm'

    return (
      <div
        className={cx('accordion-disclosure', className)}
        ref={ref}
        {...rest}
        data-testid={dataTestId}
      >
        <div className={cx('accordion-disclosure-wrapper')}>{children}</div>
        <div className={cx('accordion-disclosure-actions')}>
          {actions}
          <Disclosure
            render={props => (
              <Button
                className={cx('accordion-disclosure-arrow-button')}
                size={buttonSize}
                variant={arrowButtonVariant}
                {...props}
                data-testid={`${dataTestId}-button`}
              />
            )}
          >
            <Icon className={cx('accordion-disclosure-arrow-icon')} name="angle-down" size="lg" />
          </Disclosure>
        </div>
      </div>
    )
  }
)

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
