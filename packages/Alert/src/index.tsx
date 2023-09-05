import React, { Children, cloneElement } from 'react'
import { Stack } from '@welcome-ui/stack'
import { Box } from '@welcome-ui/box'
import { CloseButton, CloseButtonPanda } from '@welcome-ui/close-button'
import { Button, ButtonPanda, ButtonPandaProps, ButtonProps } from '@welcome-ui/button'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import {
  Variant,
  VariantIcon,
  VariantIconPanda,
  type VariantIconPandaOptions,
} from '@welcome-ui/variant-icon'
import { type HTMLStyledProps, styled } from '@welcome-ui/panda/jsx'
import { alert, type AlertVariantProps } from '@welcome-ui/panda/recipes'
import { cx } from '@welcome-ui/panda/css'

import * as S from './styles'
import { Title, TitlePanda } from './Title'

export type Size = 'sm' | 'md'
export interface AlertOptions {
  variant?: Variant
  size?: Size
  icon?: JSX.Element
  isFullWidth?: boolean
  cta?: JSX.Element
  /**
   * @description add a close button with an onclick handleClose function
   */
  handleClose?: () => void
}

export type AlertProps = CreateWuiProps<'div', AlertOptions>

const AlertComponent = forwardRef<'div', AlertProps>(
  (
    {
      children,
      cta,
      dataTestId,
      handleClose,
      icon,
      isFullWidth,
      size = 'sm',
      variant = 'default',
      ...rest
    },
    ref
  ) => {
    const closeButtonDataTestId = dataTestId ? `${dataTestId}-close-button` : undefined

    const content = Children.toArray(children).map((child: React.ReactElement) => {
      // Add variant to Title to show the correct icon
      if (child.type === Title) {
        return cloneElement(child, { variant })
      }
      return child
    })

    return (
      <S.Alert
        data-testid={dataTestId}
        isFullWidth={isFullWidth}
        ref={ref}
        size={size}
        variant={variant}
        {...rest}
      >
        {!!handleClose && (
          <CloseButton
            dataTestId={closeButtonDataTestId}
            onClick={handleClose}
            position="absolute"
            right="sm"
            top="sm"
          />
        )}
        <VariantIcon icon={icon} pr="md" variant={variant} />
        <Box flex="1">
          {cta ? (
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <div>{content}</div>
              {cta}
            </Stack>
          ) : (
            content
          )}
        </Box>
      </S.Alert>
    )
  }
)

// We need this component to check its existence in <Alert> and to allow users to add Button in <Alert> content
const AlertButton = forwardRef<'button', ButtonProps>((props, ref) => (
  <Button ref={ref} size="sm" {...props} />
))

export const Alert = Object.assign(AlertComponent, { Title, Button: AlertButton })

type AlertPandaComponentOptions = AlertVariantProps & Omit<AlertOptions, keyof AlertVariantProps>
type AlertPandaComponentProps = HTMLStyledProps<'div'> & AlertPandaComponentOptions

const AlertPandaComponent = React.forwardRef<HTMLDivElement, AlertPandaComponentProps>(
  ({ children, className, cta, handleClose, icon, isFullWidth, size, variant, ...rest }, ref) => {
    const classes = alert({ isFullWidth, size, variant })
    // todo fix data-testid props
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const dataTestId = rest['data-testid']
    const closeButtonDataTestId = dataTestId ? `${dataTestId}-close-button` : undefined

    const content = Children.toArray(children).map((child: React.ReactElement) => {
      if (child.type === TitlePanda) {
        return cloneElement(child, { className: classes.title, ...child.props })
      }
      return child
    })

    return (
      <styled.div className={cx(classes.root, className)} ref={ref} {...rest}>
        {!!handleClose && (
          <CloseButtonPanda
            data-testid={closeButtonDataTestId}
            onClick={handleClose}
            position="absolute"
            right="sm"
            top="sm"
          />
        )}
        <VariantIconPanda
          icon={icon}
          pr="md"
          variant={variant as VariantIconPandaOptions['variant']}
        />
        <styled.div flex="1">
          {cta ? (
            <styled.div
              alignItems="center"
              direction="row"
              display="flex"
              justifyContent="space-between"
            >
              <div>{content}</div>
              {cta}
            </styled.div>
          ) : (
            content
          )}
        </styled.div>
      </styled.div>
    )
  }
)

// We need this component to check its existence in <Alert> and to allow users to add Button in <Alert> content
const AlertButtonPanda = React.forwardRef<HTMLButtonElement, ButtonPandaProps>((props, ref) => (
  <ButtonPanda ref={ref} size="sm" {...props} />
))

export const AlertPanda = Object.assign(AlertPandaComponent, {
  Title: TitlePanda,
  Button: AlertButtonPanda,
})
