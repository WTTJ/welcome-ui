import styled, { css } from 'styled-components'
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
  transition: background-color ${({ theme }) => theme.transitions.medium},
    border-color ${({ theme }) => theme.transitions.medium}, transform 100ms ease-in-out;
`

const sliderFocused = css`
  ${({ theme }) => theme.sliders.focused};
  transform: scale(1.2);
`

const rangeTrack = css`
  position: absolute;
  width: 100%;
  height: ${({ theme }) => theme.space.xs};
`

export const Slider = styled.input<BorderProps>(
  ({ borderSelectorColor, disabled, theme }) => css`
    ${theme.sliders.default};
    appearance: none;
    cursor: pointer;
    background-repeat: no-repeat;
    border-radius: 0;
    margin: auto 0;
    width: 100%;
    height: ${theme.space.xs};

    &::-webkit-slider-thumb {
      ${theme.sliders.selector};
      ${sliderSelector};
      border-color: ${borderSelectorColor ? borderSelectorColor : 'transparent'};
    }

    &::-moz-range-thumb {
      ${theme.sliders.selector};
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
      ${theme.sliders.disabled}
      cursor: not-allowed;

      &::-webkit-slider-thumb {
        ${theme.sliders.selector.disabled};
        cursor: not-allowed;
      }

      &::-moz-range-thumb {
        ${theme.sliders.selector.disabled};
        cursor: not-allowed;
      }

      &:active {
        &::-webkit-slider-thumb {
          ${theme.sliders.focused.disabled};
        }

        &::-moz-range-thumb {
          ${theme.sliders.focused.disabled};
        }
      }
    `};
  `
)

export const RangeInput = styled.input<BorderProps>(
  ({ borderSelectorColor, disabled, theme }) => css`
    ${theme.sliders.rangeInput}
    appearance: none;
    pointer-events: none;
    position: absolute;
    height: 0;
    width: 100%;
    outline: none;
    z-index: 1;
    top: ${theme.space.xxs};

    &::-webkit-slider-thumb {
      ${theme.sliders.selector};
      ${sliderSelector};

      border-color: ${borderSelectorColor ? borderSelectorColor : 'transparent'};
      top: ${theme.space.sm};
      pointer-events: all;
      position: relative;
    }

    &::-moz-range-thumb {
      ${theme.sliders.selector};
      ${sliderSelector};

      border-color: ${borderSelectorColor ? borderSelectorColor : 'transparent'};
      top: ${theme.space.sm};
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
        ${theme.sliders.selector.disabled};
        cursor: not-allowed;
      }

      &::-moz-range-thumb {
        ${theme.sliders.selector.disabled};
        cursor: not-allowed;
      }

      &:active {
        &::-webkit-slider-thumb {
          ${theme.sliders.focused.disabled};
        }

        &::-moz-range-thumb {
          ${theme.sliders.focused.disabled};
        }
      }
    `};
  `
)

export const Track = styled(Box)(
  ({ theme }) => css`
    ${rangeTrack};
    background-color: ${theme.colors['nude-400']};
  `
)

type RangeProps = {
  disabled?: boolean
}

export const Range = styled(Box)<RangeProps>(
  ({ disabled, theme }) => css`
    ${rangeTrack};
    background-color: ${theme.colors['primary-500']};

    ${disabled &&
    css`
      ${theme.sliders.disabled}
      cursor: not-allowed;
    `};
  `
)

export const Thick = styled(Box)(
  ({ theme }) => css`
    position: absolute;

    :before {
      content: '';
      position: absolute;
      background-color: ${theme.colors['dark-200']};
      height: 6;
      width: 1;
      transform: translate(-50%);
    }
  `
)

export const ThickLabel = styled(Hint)(
  ({ theme }) => css`
    position: absolute;
    color: ${theme.colors['dark-400']};
    top: 0;
    transform: translate(-50%);
    white-space: nowrap;
  `
)

type OutputProps = {
  isVisible?: boolean
}

export const Output = styled.output<OutputProps>(
  ({ isVisible, theme }) => css`
    opacity: 0;
    visibility: hidden;
    transition: opacity 150ms ease-in-out, visibility 150ms ease-in-out, transform 150ms ease-in-out;
    position: absolute;
    text-align: center;
    transform: translate(-50%, calc(-100% + -${theme.space.xs}));

    ${isVisible &&
    css`
      opacity: 100;
      visibility: visible;
      transform: translate(-50%, calc(-100% + -${theme.space.sm}));
    `}
  `
)

export const Tooltip = styled(Box)(
  ({ theme }) => css`
    ${theme.sliders.output.tooltip};
    flex: 1 1 auto;
    margin: auto;
    min-width: ${theme.space.xxs};
    padding: ${theme.space.xs} ${theme.space.sm};
  `
)
