import styled, { css, th } from '@wttj/xstyled-styled-components'
import { Box } from '@welcome-ui/box'
import { Hint } from '@welcome-ui/hint'

type BorderProps = {
  borderSelectorColor?: string
}

const sliderSelector = css`
  appearance: none;
  cursor: pointer;
  height: 20;
  width: 20;
  transform: scale(1);
  transition: background-color ${th.transition('medium')}, border-color ${th.transition('medium')},
    transform 100ms ease-in-out;
`

const sliderFocused = css`
  ${th('sliders.focused')};
  transform: scale(1.2);
`

const rangeTrack = css`
  position: absolute;
  width: 100%;
  height: ${th('space.xs')};
`

export const Slider = styled.input<BorderProps>(
  ({ borderSelectorColor, disabled }) => css`
    ${th('sliders.default')};
    appearance: none;
    cursor: pointer;
    background-repeat: no-repeat;
    border-radius: 0;
    margin: auto 0;
    width: 100%;
    height: ${th('space.xs')};

    &::-webkit-slider-thumb {
      ${th('sliders.selector')};
      ${sliderSelector};
      border-color: ${borderSelectorColor ? borderSelectorColor : 'transparent'};
    }

    &::-moz-range-thumb {
      ${th('sliders.selector')};
      ${sliderSelector};
      border-color: ${borderSelectorColor ? borderSelectorColor : 'transparent'};
    }

    &:active,
    &:focus-visible {
      outline: none;

      &::-webkit-slider-thumb {
        ${sliderFocused};
      }

      &::-moz-range-thumb {
        ${sliderFocused};
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
    appearance: none;
    pointer-events: none;
    position: absolute;
    height: 0;
    width: 100%;
    outline: none;
    z-index: 1;
    top: ${th('space.xxs')};

    &::-webkit-slider-thumb {
      ${th('sliders.selector')};
      ${sliderSelector};

      border-color: ${borderSelectorColor ? borderSelectorColor : 'transparent'};
      top: ${th('space.sm')};
      pointer-events: all;
      position: relative;
    }

    &::-moz-range-thumb {
      ${th('sliders.selector')};
      ${sliderSelector};

      border-color: ${borderSelectorColor ? borderSelectorColor : 'transparent'};
      top: ${th('space.sm')};
      pointer-events: all;
      position: relative;
    }

    &:active,
    &:focus-visible {
      &::-webkit-slider-thumb {
        ${sliderFocused};
      }

      &::-moz-range-thumb {
        ${sliderFocused};
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
    ${rangeTrack};
    background-color: nude-400;
  `
)

type RangeProps = {
  disabled?: boolean
}

export const Range = styled(Box)<RangeProps>(
  ({ disabled }) => css`
    ${rangeTrack};
    background-color: primary-500;

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
      background-color: dark-200;
      height: 6;
      width: 1;
      transform: translate(-50%);
    }
  `
)

export const ThickLabel = styled(Hint)(
  () => css`
    position: absolute;
    color: dark-400;
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
    transition: opacity 150ms ease-in-out, visibility 150ms ease-in-out, transform 150ms ease-in-out;
    position: absolute;
    text-align: center;
    transform: translate(-50%, calc(-100% + -${th('space.xs')}));

    ${isVisible &&
    css`
      opacity: 100;
      visibility: visible;
      transform: translate(-50%, calc(-100% + -${th('space.sm')}));
    `}
  `
)

export const Tooltip = styled(Box)(
  () => css`
    ${th('sliders.output.tooltip')};
    flex: 1 1 auto;
    margin: auto;
    min-width: ${th('space.xxs')};
    padding: ${th('space.xs')} ${th('space.sm')};
  `
)
