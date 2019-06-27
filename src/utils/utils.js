import React from 'react'
import omit from 'lodash.omit'
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
import { getSystemPropTypes } from '@xstyled/prop-types'

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

const xstyledProps = Object.keys(getSystemPropTypes(system))

export const filterProps = (Component, excludedProps) =>
  function FilteredProps(props) {
    const rest = omit(props, [...excludedProps, ...xstyledProps])
    return <Component {...rest} />
  }
