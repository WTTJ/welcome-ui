import styled, { css, th } from '@xstyled/styled-components'
import { Link } from 'welcome-ui/Link'

const TOPNAV_HEIGHT = '60px'

// Mock Box component for testing
const Box = 'div'
const OrganizationLogo = styled.div``
const OrganizationName = styled.div``

type Variant = 'primary' | 'secondary'

export const Wrapper = styled(Box)<{ variant: Variant }>(
  ({ variant }) => css`
    background-color: ${variant === 'primary' ? 'primary-500' : 'secondary-500'};
    padding: xxl 0;
    position: relative;
    isolation: isolate;
    min-height: calc(100vh - ${TOPNAV_HEIGHT});

    @media (min-width: lg) {
      padding: 3xl 0;
    }
  `
)

export const Card = styled(Link)<{ elevated?: boolean }>`
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

const triggerActiveStyles = css`
  background-color: beige-30;

  ${OrganizationLogo} {
    outline-color: beige-30 !important;
  }

  ${OrganizationName} {
    color: neutral-90;
  }
`

export const TriggerButton = styled.buttonBox<{
  $isActive: boolean
  $isExpanded: boolean
}>`
  border: none;
  background-color: transparent;
  padding: md lg;
  cursor: pointer;
  width: 100%;
  border-radius: md;
  transition: background-color 300ms;

  ${({ $isExpanded }) =>
    !$isExpanded &&
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

  ${({ $isActive }) => $isActive && triggerActiveStyles};
  &:active {
    ${triggerActiveStyles}
  }
`
