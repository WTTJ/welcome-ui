import styled, { css, system, th } from '@xstyled/styled-components'

import { Text } from '@/Text'
import { VariantIcon } from '@/VariantIcon'

import type { AlertTitleProps } from './Title'

import type { AlertOptions } from './index'

export const Content = styled.divBox`
  display: flex;
  gap: md;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
`

export const Icon = styled(VariantIcon)`
  position: absolute;
  align-self: flex-start;
`

export const Alert = styled.divBox<AlertOptions>(({ icon, isFullWidth, size, variant }) => {
  return css`
    position: relative;
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: ${isFullWidth ? '100%' : 'max-content'};
    ${th('alerts.default')};
    ${th(`alerts.${variant}`)};
    ${th(`alerts.sizes.${size}`)};

    ${icon !== null &&
    size === 'sm' &&
    css`
      ${Content} {
        margin-left: calc(${th('icons.sm')} + ${th('space.md')});
      }
    `}

    ${icon !== null &&
    size === 'md' &&
    css`
      ${Content} {
        margin-left: calc(${th('icons.md')} + ${th('space.lg')});
        gap: ${th('space.lg')};
        font-size: ${th('fontSizes.md')};
      }

      ${Icon} {
        margin-top: -3;
      }
    `}
  `
})

export const Title = styled(Text)<AlertTitleProps>(({ variant }) => {
  return css`
    font-weight: medium;
    ${th('alerts.title.default')};
    ${th(`alerts.title.sizes.${variant}`)};
    margin-right: xl;
    ${system};
  `
})
