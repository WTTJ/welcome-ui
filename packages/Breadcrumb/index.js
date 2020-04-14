import React, { cloneElement, forwardRef } from 'react'
import { RightIcon } from '@welcome-ui/icons.right'
import { node, oneOfType, string } from 'prop-types'

import { COMPONENT_TYPE } from '../../src/utils/propTypes'

import { Item } from './Item'
import * as S from './styles'

export const Breadcrumb = forwardRef(
  ({ as = 'a', children, separator = <RightIcon size="sm" />, ...rest }, ref) => {
    const clones = children.map((child, index) => {
      const isLastChild = children.length === index + 1

      return cloneElement(child, {
        key: `breadcrumb-${index}`,
        separator: isLastChild ? undefined : separator,
        as: isLastChild ? 'span' : as,
        ...child.props
      })
    })

    return (
      <S.Breadcrumb as="nav" ref={ref} {...rest}>
        <S.List>{clones}</S.List>
      </S.Breadcrumb>
    )
  }
)

Breadcrumb.displayName = 'Breadcrumb'

Breadcrumb.propTypes = {
  as: oneOfType(COMPONENT_TYPE),
  children: node.isRequired,
  separator: oneOfType([node, string])
}

Breadcrumb.Item = Item
