/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React from 'react'
import {
  backgrounds,
  basics,
  borders,
  color,
  compose,
  display,
  flexboxes,
  grids,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  positioning,
  space,
  typography,
  verticalAlign,
  width
} from '@xstyled/system'

export const system = compose(
  backgrounds,
  basics,
  borders,
  color,
  display,
  flexboxes,
  grids,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  positioning,
  space,
  typography,
  verticalAlign,
  width
)

export const createElement = (component, { _ref, ...props }) =>
  React.createElement(component, {
    ...props,
    ref: _ref
  })
