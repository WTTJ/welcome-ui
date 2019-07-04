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

import { REFS_TYPE } from './propTypes'

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

const COMMON_EXCLUDED_PROPS = ['forwardedAs', '_ref']

export const filterProps = (Component, excludedProps) => {
  const FilteredProps = ({ _ref, ...rest }) => {
    const props = omit(rest, [...COMMON_EXCLUDED_PROPS, ...excludedProps, ...xstyledProps])
    return <Component {...props} ref={_ref} />
  }

  FilteredProps.displayName = 'FilteredProps'
  FilteredProps.propTypes = {
    _ref: REFS_TYPE
  }

  return FilteredProps
}
