import React, { forwardRef, ReactNode } from 'react'
import { bool, node, oneOf } from 'prop-types'
import { SpecialPipelineIcon } from '@welcome-ui/icons.special_pipeline'
import { VariantIcon } from '@welcome-ui/variant-icon'
import { wrapChildren } from '@welcome-ui/utils'

import * as S from './styles'

const VARIANTS = ['error', 'warning'] as const

export interface Props {
  checkableField?: boolean
  children: ReactNode
  dataTestId?: string
  disabled?: boolean
  disabledIcon?: ReactNode
  errorWarningIcon?: ReactNode
  variant?: typeof VARIANTS[number]
}

export const Label = forwardRef<HTMLLabelElement, Props>((props, ref) => {
  const {
    checkableField,
    children,
    dataTestId,
    disabled,
    disabledIcon,
    errorWarningIcon,
    variant,
    ...rest
  } = props
  // Wrap strings in span to allow for required asterisk
  const content = wrapChildren(children)

  return (
    <S.Label
      data-testid={dataTestId}
      disabled={disabled}
      disabledIcon={disabledIcon}
      ref={ref}
      variant={variant}
      {...rest}
    >
      {!checkableField && <VariantIcon errorWarningIcon={errorWarningIcon} variant={variant} />}
      {disabled && <S.Disabled>{disabledIcon || <SpecialPipelineIcon />}</S.Disabled>}
      {content}
    </S.Label>
  )
})

Label.displayName = 'Label'

Label.propTypes /* remove-proptypes */ = {
  checkableField: bool,
  children: node,
  disabled: bool,
  disabledIcon: node,
  errorWarningIcon: node,
  variant: oneOf(VARIANTS)
}

export const StyledLabel = S.Label
