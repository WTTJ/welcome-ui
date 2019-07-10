import React from 'react'
import { createSystemComponent } from '@xstyled/system'
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

export const filterComponent = Component => createSystemComponent(React, Component, system)
