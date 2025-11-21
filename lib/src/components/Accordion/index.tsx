import { Disclosure, DisclosureContent } from '@ariakit/react'
import { forwardRef } from 'react'

import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import styles from './accordion.module.scss'
import type { AccordionProps } from './types'

const cx = classNames(styles)

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, dataTestId, store, title, ...rest }, ref) => {
    return (
      <div className={cx('root', className)} ref={ref} {...rest}>
        <Disclosure
          className={cx('disclosure')}
          data-testid={dataTestId ? `${dataTestId}-title` : undefined}
          store={store}
        >
          <Text as="h5" variant="heading-sm-strong">
            {title}
          </Text>
          <div className={cx('icon')}>
            <Icon name="arrow-right" size="sm" />
          </div>
        </Disclosure>
        <DisclosureContent
          className={cx('disclosure-content')}
          data-testid={dataTestId ? `${dataTestId}-content` : undefined}
          store={store}
        >
          <div className={cx('content-child')}>{children}</div>
        </DisclosureContent>
      </div>
    )
  }
)

Accordion.displayName = 'Accordion'

export { useDisclosureStore as useAccordion } from '@ariakit/react'
