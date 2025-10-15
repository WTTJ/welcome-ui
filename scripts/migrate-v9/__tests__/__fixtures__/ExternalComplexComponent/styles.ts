import styled, { css, th } from '@xstyled/styled-components'
import { Box } from 'welcome-ui/Box'
import { Link } from 'welcome-ui/Link'
import { OrganizationLogo } from 'welcome-ui/Link'
import { Text } from 'welcome-ui/Text'

const TOPNAV_HEIGHT = '60px'

type Variant = 'primary' | 'secondary'

export const Wrapper = styled(Box)<{ variant: Variant }>(
  ({ variant }) => css`
    padding: xxl 0;
    background-color: ${variant === 'primary' ? 'primary-500' : 'secondary-500'};
    isolation: isolate;
    position: ${variant === 'primary' ? th('space.sm') : 0};
    min-height: calc(100vh - ${TOPNAV_HEIGHT});

    @media (min-width: lg) {
      padding: 3xl 0;
    }
  `
)

export const Card = styled(Link)<{ elevated: boolean }>`
  background: white;
  border-radius: md;
  padding: lg;
  ${({ elevated }) =>
    elevated &&
    css`
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `}
`

interface TitleProps {
  displayDetail?: boolean
}

export const Title = styled.h3<TitleProps>`
  ${th('texts.h4')};
  color: neutral-90;
  margin-top: ${props => (props.displayDetail ? th('space.sm') : 0)};
`

export const OrganizationName = styled(Text).attrs({ lines: 1, variant: 'sm' })`
  color: neutral-60;
  font-weight: medium;
  margin: 0;
  transition: color 300ms;
`

const triggerActiveStyles = css`
  ${Box} {
    background-color: beige-10;
  }

  color: neutral-50;

  ${OrganizationLogo} {
    outline-color: beige-30 !important;
    border: 1px solid;
    border-color: beige-50;
  }

  background-color: beige-30;

  ${OrganizationName} {
    color: neutral-90;
  }
`

export const TriggerButton = styled.buttonBox<{
  isActive: boolean
}>`
  border: none;
  background-color: transparent;
  padding: md lg;
  cursor: pointer;
  width: 100%;
  border-radius: md;
  transition: background-color 300ms;
  bottom: ${th('space.md')};

  ${({ isActive }) =>
    !isActive &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      height: 48px;
      width: 48px;
    `}

  &:hover {
    ${triggerActiveStyles};

    ${OrganizationName} {
      color: beige-80;
    }
  }

  ${({ isActive }) => isActive && triggerActiveStyles};
  &:active {
    ${triggerActiveStyles};
  }
`
