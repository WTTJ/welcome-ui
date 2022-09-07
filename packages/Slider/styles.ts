import styled, { css, th } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { Hint } from '@welcome-ui/hint'

type BorderProps = {
  borderSelectorColor?: string
}

export const Slider = styled.input<BorderProps>(
  ({ borderSelectorColor, disabled }) => css`
    -webkit-appearance: none;
    ${th('sliders.default')};

    &:active {
      &::-webkit-slider-thumb {
        ${th('sliders.focused')};
      }

      &::-moz-range-thumb {
        ${th('sliders.focused')};
      }
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      ${th('sliders.selector')};
      border-color: ${borderSelectorColor};
      transition: background-color ${th.transition('medium')},
        border-color ${th.transition('medium')};
    }

    &::-moz-range-thumb {
      -moz-appearance: none;
      ${th('sliders.selector')};
      border-color: ${borderSelectorColor};
      transition: background-color ${th.transition('medium')},
        border-color ${th.transition('medium')};
    }

    ${disabled &&
    css`
      ${th('sliders.disabled')}
      cursor: not-allowed;

      &:active {
        &::-webkit-slider-thumb {
          ${th('sliders.focused.disabled')};
        }

        &::-moz-range-thumb {
          ${th('sliders.focused.disabled')};
        }
      }

      &::-webkit-slider-thumb {
        ${th('sliders.selector.disabled')};
        cursor: not-allowed;
      }

      &::-moz-range-thumb {
        ${th('sliders.selector.disabled')};
        cursor: not-allowed;
      }
    `};
  `
)

export const RangeInput = styled.input<BorderProps>(
  ({ borderSelectorColor, disabled }) => css`
    -webkit-appearance: none;
    ${th('sliders.rangeInput')}

    &:active {
      &::-webkit-slider-thumb {
        ${th('sliders.focused')};
      }

      &::-moz-range-thumb {
        ${th('sliders.focused')};
      }
    }

    &::-webkit-slider-thumb {
      ${th('sliders.selector')};
      border-color: ${borderSelectorColor};
      -webkit-appearance: none;
      top: ${th('space.sm')};
      pointer-events: all;
      position: relative;
    }

    &::-moz-range-thumb {
      ${th('sliders.selector')};
      border-color: ${borderSelectorColor};
      -webkit-appearance: none;
      top: ${th('space.sm')};
      pointer-events: all;
      position: relative;
    }

    ${disabled &&
    css`
      &:active {
        &::-webkit-slider-thumb {
          ${th('sliders.focused.disabled')};
        }

        &::-moz-range-thumb {
          ${th('sliders.focused.disabled')};
        }
      }

      &::-webkit-slider-thumb {
        ${th('sliders.selector.disabled')};
        cursor: not-allowed;
      }

      &::-moz-range-thumb {
        ${th('sliders.selector.disabled')};
        cursor: not-allowed;
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
