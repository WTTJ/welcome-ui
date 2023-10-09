import React from 'react'
import { type HTMLStyledProps, styled } from '@welcome-ui/panda/jsx'
import { badge, type BadgeVariantProps } from '@welcome-ui/panda/recipes'

/**
 * @experimental panda version
 */
export type BadgePandaOptions = BadgeVariantProps &
  Partial<{
    withNumberAbbreviation: boolean
    disabled: boolean
  }>
/**
 * @experimental panda version
 */
export type BadgePandaProps = HTMLStyledProps<'div'> & BadgePandaOptions

/**
 * @experimental panda version
 */
export const StyledBadgePanda = styled('div', badge)

/**
 * @experimental panda version
 */
export const BadgePanda = React.forwardRef<HTMLDivElement, BadgePandaProps>(
  ({ children, disabled, withNumberAbbreviation, ...rest }, ref) => {
    let text
    const isNumber = Number.isInteger(children)
    const textLength = children.toString().length

    if (isNumber) {
      if (withNumberAbbreviation && (children as number) > 99) {
        text = '99+'
      } else {
        text = children
      }
    } else {
      text = children
    }

    return (
      <StyledBadgePanda aria-disabled={disabled} data-length={textLength} ref={ref} {...rest}>
        {text}
      </StyledBadgePanda>
    )
  }
)

BadgePanda.displayName = 'BadgePanda'
