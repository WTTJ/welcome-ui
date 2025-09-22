import { Disclosure, DisclosureContent, useDisclosureStore } from '@ariakit/react'
import { cloneElement, forwardRef } from 'react'

import { RightIcon } from '@/components/Icon'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import styles from './accordion.module.scss'
import type { AccordionProps, UseAccordion, UseAccordionProps } from './types'

const cx = classNames(styles)

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, icon = <RightIcon />, store, title, ...rest }, ref) => {
    return (
      <div className={cx('wrapper', rest.className)} ref={ref} {...rest}>
        <Disclosure
          className={cx('disclosure')}
          data-testid={rest.dataTestId ? `${rest.dataTestId}-title` : undefined}
          store={store}
        >
          <Text variant="h5">{title}</Text>
          <div className={cx('icon')}>{cloneElement(icon, { size: 'sm' })}</div>
        </Disclosure>
        <DisclosureContent
          className={cx('disclosure-content')}
          data-testid={rest.dataTestId ? `${rest.dataTestId}-content` : undefined}
          store={store}
        >
          <div className={cx('content-child')}>{children}</div>
        </DisclosureContent>
      </div>
    )
  }
)

export function useAccordion(options?: UseAccordionProps): UseAccordion {
  const accordion = useDisclosureStore({ animated: true, ...options })

  return accordion
}
