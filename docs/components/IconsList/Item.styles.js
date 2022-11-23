import { Box } from '@welcome-ui/box'
import styled, { css } from 'styled-components'

export const Content = styled(Box)(
  ({ theme }) => css`
    background-color: ${theme.colors['light-900']};
    border-color: border;
    border-width: ${theme.space.sm};
    border-style: solid;
    border-radius: ${theme.space.lg};
    padding: ${theme.space.lg} ${theme.space.sm};
    width: 100%;
    text-align: center;
    transition: ${theme.transitions.medium};
  `
)

export const Item = styled(Box)(
  ({ copied, theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    color: ${theme.colors['dark-900']};

    ${!copied &&
    css`
      &:hover {
        ${Content} {
          border-color: ${theme.colors['dark-400']};
        }
      }
    `}

    ${copied &&
    css`
      ${Content} {
        background-color: ${theme.colors['success-100']};
        border-color: ${theme.colors['success-100']};
      }
    `}
  `
)
