import styled, { css, th } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { Hint } from '@welcome-ui/hint'

type BorderProps = {
  borderSelectorColor?: string
}

export const Slider = styled.input<BorderProps>(
  ({ borderSelectorColor, disabled }) => css`
    ${th('sliders.default')};

    &::-webkit-slider-thumb {
      ${th('sliders.selector')};
      border-color: ${borderSelectorColor};
      transition: background-color ${th.transition('medium')},
        border-color ${th.transition('medium')};
    }

    &::-moz-range-thumb {
      ${th('sliders.selector')};
      border-color: ${borderSelectorColor};
      transition: background-color ${th.transition('medium')},
        border-color ${th.transition('medium')};
    }

    &:active {
      &::-webkit-slider-thumb {
        ${th('sliders.focused')};
      }

      &::-moz-range-thumb {
        ${th('sliders.focused')};
      }
    }

    ${disabled &&
    css`
      ${th('sliders.disabled')}
      cursor: not-allowed;

      &::-webkit-slider-thumb {
        ${th('sliders.selector.disabled')};
        cursor: not-allowed;
      }

      &::-moz-range-thumb {
        ${th('sliders.selector.disabled')};
        cursor: not-allowed;
      }

      &:active {
        &::-webkit-slider-thumb {
          ${th('sliders.focused.disabled')};
        }

        &::-moz-range-thumb {
          ${th('sliders.focused.disabled')};
        }
      }
    `};
  `
)

export const RangeInput = styled.input<BorderProps>(
  ({ borderSelectorColor, disabled }) => css`
    ${th('sliders.rangeInput')}

    &::-webkit-slider-thumb {
      ${th('sliders.selector')};
      border-color: ${borderSelectorColor};
      top: ${th('space.sm')};
      pointer-events: all;
      position: relative;
    }

    &::-moz-range-thumb {
      ${th('sliders.selector')};
      border-color: ${borderSelectorColor};
      top: ${th('space.sm')};
      pointer-events: all;
      position: relative;
    }

    &:active {
      &::-webkit-slider-thumb {
        ${th('sliders.focused')};
      }

      &::-moz-range-thumb {
        ${th('sliders.focused')};
      }
    }

    ${disabled &&
    css`
      &::-webkit-slider-thumb {
        ${th('sliders.selector.disabled')};
        cursor: not-allowed;
      }

      &::-moz-range-thumb {
        ${th('sliders.selector.disabled')};
        cursor: not-allowed;
      }

      &:active {
        &::-webkit-slider-thumb {
          ${th('sliders.focused.disabled')};
        }

        &::-moz-range-thumb {
          ${th('sliders.focused.disabled')};
        }
      }
    `};
  `
)

export const Track = styled(Box)(
  () => css`
    ${th('sliders.rangeInput.track')};
    background-color: nude.400;
  `
)

type RangeProps = {
  disabled?: boolean
}

export const Range = styled(Box)<RangeProps>(
  ({ disabled }) => css`
    ${th('sliders.rangeInput.track')};
    background-color: primary.500;

    ${disabled &&
    css`
      ${th('sliders.disabled')}
      cursor: not-allowed;
    `};
  `
)

export const Thick = styled(Box)(
  () => css`
    position: absolute;

    :before {
      content: '';
      position: absolute;
      background-color: dark.200;
      height: 6;
      width: 1;
      transform: translate(-50%);
    }
  `
)

export const ThickLabel = styled(Hint)(
  () => css`
    position: absolute;
    color: dark.400;
    top: 0;
    transform: translate(-50%);
    white-space: nowrap;
  `
)

type OutputProps = {
  isVisible?: boolean
}

export const Output = styled.output<OutputProps>(
  ({ isVisible }) => css`
    opacity: 0;
    visibility: hidden;
    transition: opacity ${th.transition('fast')}, visibility ${th.transition('fast')};
    ${th('sliders.output')};

    ${isVisible &&
    css`
      opacity: 100;
      visibility: visible;
    `}
  `
)

export const Tooltip = styled(Box)(
  () => css`
    ${th('sliders.output.tooltip')};
  `
)
