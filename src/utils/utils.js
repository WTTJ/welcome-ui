import React from 'react'
import { node, shape } from 'prop-types'
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

const COMMON_EXCLUDED_PROPS = ['forwardedAs', '_ref']

export const filterProps = (Component, excludedProps) => {
  const FilteredProps = ({ _ref, ...rest }) => {
    const props = omit(rest, [...COMMON_EXCLUDED_PROPS, ...excludedProps, ...xstyledProps])
    return <Component {...props} ref={_ref} />
  }

  FilteredProps.displayName = 'FilteredProps'
  FilteredProps.propTypes = {
    _ref: shape({
      current: node
    })
  }

  return FilteredProps
}
