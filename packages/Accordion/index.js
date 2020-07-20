import React from 'react'
import { useDisclosureState } from 'reakit/Disclosure'
import AnimateHeight from 'react-animate-height'
import { bool, node } from 'prop-types'
import { RightIcon } from '@welcome-ui/icons.right'

import * as S from './styles'

export function Accordion({
  children,
  icon = <RightIcon size="sm" />,
  title,
  visible = false,
  ...rest
}) {
  const disclosure = useDisclosureState({ visible, animated: true })
  const isVisible = disclosure.visible

  return (
    <S.Accordion {...rest}>
      <S.Disclosure {...disclosure}>
        {title}
        <S.Icon visible={isVisible}>{icon}</S.Icon>
      </S.Disclosure>
      <S.Content {...disclosure}>
        <AnimateHeight height={isVisible ? 'auto' : 0}>{children}</AnimateHeight>
      </S.Content>
    </S.Accordion>
  )
}

Accordion.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  icon: node,
  title: node.isRequired,
  visible: bool
}
