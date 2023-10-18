import React from 'react'
import { Button as AriakitButton } from '@ariakit/react'
import { type HTMLStyledProps, styled } from '@welcome-ui/panda/jsx'
import { button, type ButtonVariantProps } from '@welcome-ui/panda/recipes'

/**
 * @experimental panda version
 */
export type ButtonPandaOptions = ButtonVariantProps
/**
 * @experimental panda version
 */
export type ButtonPandaProps = HTMLStyledProps<'button'> & ButtonPandaOptions

/**
 * @experimental panda version
 */
export const StyledButtonPanda = styled(AriakitButton, button)

/**
 * @experimental panda version
 */
export const ButtonPanda = React.forwardRef<HTMLButtonElement, ButtonPandaProps>(
  ({ children, ...rest }, ref) => {
    return (
      <StyledButtonPanda ref={ref} {...rest}>
        {children}
      </StyledButtonPanda>
    )
  }
)

ButtonPanda.displayName = 'ButtonPanda'
