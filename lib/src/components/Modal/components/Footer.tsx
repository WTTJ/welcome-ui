import { forwardRef } from 'react'

import { Checkbox as WUICheckbox } from '@/components/Checkbox'
import { Field } from '@/components/Field'
import { classNames } from '@/utils'

import modalStyles from '../modal.module.scss'
import type { FooterProps } from '../types'

const cx = classNames(modalStyles)

const Buttons = ({ children, className, ...rest }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cx('footer-buttons', className)} {...rest}>
    {children}
  </div>
)
Buttons.displayName = 'Modal.Footer.Buttons'

const Checkbox = ({
  checked,
  handleCheckbox,
  label = "Don't show this again",
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & {
  checked: boolean
  handleCheckbox: (isChecked: boolean) => void
  label?: string
}) => (
  <Field className={cx('footer-checkbox')} {...rest} inline label={label}>
    <WUICheckbox checked={checked} onChange={handleCheckbox} />
  </Field>
)
Checkbox.displayName = 'Modal.Footer.Checkbox'

/**
 * @name Modal.Footer
 */
export const FooterComponent = forwardRef<HTMLDivElement, FooterProps>(
  ({ children, className, variant = 'right', ...rest }, ref) => {
    return (
      <footer className={cx('footer', className)} ref={ref} {...rest}>
        {children ? (
          <div className={cx('footer-children-wrapper', `variant-${variant}`)}>{children}</div>
        ) : null}
      </footer>
    )
  }
)

FooterComponent.displayName = 'Modal.Footer'

export const Footer = Object.assign(FooterComponent, {
  Buttons,
  Checkbox,
})
