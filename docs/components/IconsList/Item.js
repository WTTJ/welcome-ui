
import React from 'react'
import { useCopyText } from '@welcome-ui/utils.copy'
import { Toast, useToast } from '@welcome-ui/toast'
import { Text } from '@welcome-ui/text'

import * as S from './Item.styles'

export function Item({ componentName, icon: Icon, name }) {
  const [copy, copied] = useCopyText(componentName, 500)
  const toast = useToast()

  const handleCopy = () => {
    copy()
    toast(
      <Toast.Snackbar variant="success">
        <span>Copied</span>
      </Toast.Snackbar>,
      { duration: 1000 }
    )
  }

  return (
    <S.Item copied={copied} onClick={handleCopy}>
      <S.Content>
        <Icon size="xl" />
        <Text as="span" color="nude.700" lines={2} pt="md" px="sm" variant="sm">
          {name}
        </Text>
      </S.Content>
    </S.Item>
  )
}
