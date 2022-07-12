import styled from 'styled-components'
import { Box } from '@welcome-ui/box'

export const ButtonGroup = styled(Box)`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: -3px;

  > * {
    margin-top: 3px;

    &:not(:only-child) {
      &:not(:last-child) {
        border-right-color: rgba(255, 255, 255, 0.4);
      }

      &:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      &:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      &:not(:last-child):not(:first-child) {
        border-radius: 0;
      }
    }
  }
`
