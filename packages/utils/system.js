import React from 'react'
import difference from 'lodash.difference'
import { createSystemComponent } from '@xstyled/system'
import * as S from '@xstyled/system'
import { compose } from '@xstyled/system'

import { reservedProps } from './reservedProps'

const systemProps = [
  S.backgrounds,
  S.basics,
  S.borders,
  S.color,
  S.display,
  S.flexboxes,
  S.grids,
  S.height,
  S.maxHeight,
  S.maxWidth,
  S.minHeight,
  S.minWidth,
  S.positioning,
  S.space,
  S.typography,
  S.verticalAlign,
  S.width
]

const wrapperProps = [
  S.margin,
  S.marginBottom,
  S.marginLeft,
  S.marginRight,
  S.marginTop,
  S.mx,
  S.my,
  S.positioning,
  S.width
]

export const system = compose(...systemProps)
export const wrapperSystem = compose(...wrapperProps)
const componentProps = difference(system.meta.props, wrapperSystem.meta.props)
  .map(prop => S[prop])
  .filter(prop => prop)

export const componentSystem = compose(...componentProps)

export const filterComponent = (Component, omitProps = []) => {
  const unallowedProps = {
    meta: {
      props: ['connected', ...omitProps, ...reservedProps, ...system.meta.props]
    }
  }
  return createSystemComponent(React, Component, unallowedProps)
}
