import { Disclosure, DisclosureContent } from '@ariakit/react'
import { forwardRef } from 'react'

import { RightIcon } from '@/components/Icon'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import styles from './accordion.module.scss'
import type { AccordionProps } from './types'

const cx = classNames(styles)

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, store, title, ...rest }, ref) => {
    return (
      <div className={cx('root', className)} ref={ref} {...rest}>
        <Disclosure
          className={cx('disclosure')}
          data-testid={rest.dataTestId ? `${rest.dataTestId}-title` : undefined}
          store={store}
        >
          <Text variant="h5">{title}</Text>
          <div className={cx('icon')}>
            <RightIcon size="sm" />
          </div>
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

export { useDisclosureStore as useAccordion } from '@ariakit/react'
