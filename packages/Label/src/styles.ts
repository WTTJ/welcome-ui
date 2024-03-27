import styled, { css, th } from '@wttj/xstyled-styled-components'

export const Label = styled.labelBox(
  ({ required }: { required: boolean }) => css`
    position: relative;
    display: flex;
    flex-shrink: 0;
    max-width: 100%;
    align-items: center;
    line-height: lg;
    ${th('labels')};
    user-select: none;

    > * {
      &:not(:last-child) {
        margin-right: sm;
      }

      :last-child {
        ${required && requiredStyles};
      }
    }
  `
)

export const requiredStyles = css`
  &::after {
    content: '*';
    margin-left: xs;
    /* It prevents the element to shift the layout and it allows us to put it properly on top with super */
    line-height: 0;
    vertical-align: super;
    font-size: subtitle-sm;
    font-weight: bold;
    color: primary-500;
  }
`

export const Disabled = styled.divBox`
  display: inline-flex;
  margin-right: xs;
`
