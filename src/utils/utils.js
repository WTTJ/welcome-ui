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
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  mx,
  my,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  positioning,
  px,
  py,
  typography,
  verticalAlign,
  width
} from '@xstyled/system'

const wrapperProps = [
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  mx,
  my,
  positioning,
  width
]

const componentProps = [
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
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  px,
  py,
  typography,
  verticalAlign
]

export const wrapperSystem = compose(...wrapperProps)

export const componentSystem = compose(...componentProps)

const systemProps = [...wrapperProps, ...componentProps]

export const system = compose(...systemProps)

export const filterComponent = (Component, omitProps = []) => {
  const unallowedProps = {
    meta: {
      props: [...omitProps, ...system.meta.props]
    }
  }
  return createSystemComponent(React, Component, unallowedProps)
}
