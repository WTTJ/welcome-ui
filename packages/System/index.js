import React from 'react'
import difference from 'lodash.difference'
import { compose, createSystemComponent } from '@xstyled/system'
import * as S from '@xstyled/system'

const FINAL_FORM_META_PROPS = Object.freeze([
  'active',
  'data',
  'dirty',
  'dirtySinceLastSubmit',
  'error',
  'initial',
  'invalid',
  'modified',
  'pristine',
  'submitError',
  'submitFailed',
  'submitSucceeded',
  'submitting',
  'touched',
  'valid',
  'validating',
  'visited'
])

const CUSTOM_FIELD_PROPS = Object.freeze([
  'checkableField',
  'focused',
  'handleRemoveFile',
  'icon',
  'iconPlacement',
  'isClearable',
  'isCreatable',
  'isEditable',
  'isMultiple',
  'isSearchable',
  'maxSize',
  'minRows',
  'popperProps',
  'renderItem'
])

const FINAL_FORM_FIELD_PROPS = Object.freeze([
  'afterSubmit',
  'allowNull',
  'beforeSubmit',
  'component',
  'format',
  'formatOnBlur',
  'initialValue',
  'isEqual',
  'onCreate',
  'parse',
  'validate',
  'validateFields'
])

const SYSTEM_PROPS = Object.freeze([
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
])

const WRAPPER_PROPS = Object.freeze([
  S.margin,
  S.marginBottom,
  S.marginLeft,
  S.marginRight,
  S.marginTop,
  S.mx,
  S.my,
  S.positioning,
  S.width
])

export const system = compose(...SYSTEM_PROPS)
export const wrapperSystem = compose(...WRAPPER_PROPS)
const componentProps = difference(system.meta.props, wrapperSystem.meta.props)
  .map(prop => S[prop])
  .filter(prop => prop)

export const componentSystem = compose(...componentProps)

// Remove (final) field props from DOM
export const filterFieldComponent = (Component, omitProps = []) =>
  filterComponent(Component, [
    ...omitProps,
    ...CUSTOM_FIELD_PROPS,
    ...FINAL_FORM_FIELD_PROPS,
    ...FINAL_FORM_META_PROPS
  ])

// Remove supplied props from DOM
export const filterComponent = (Component, omitProps = []) => {
  const unallowedProps = {
    meta: {
      props: ['connected', ...omitProps, ...system.meta.props]
    }
  }
  return createSystemComponent(React, Component, unallowedProps)
}
