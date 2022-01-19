/* eslint-disable react/prop-types */
import React from 'react'
import { useCopyText } from '@welcome-ui/utils.copy'
import { Toast, useToast } from '@welcome-ui/toast'
import { Box } from '@welcome-ui/box'

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
      </S.Content>
      <Box fontSize="meta1" fontWeight="medium" pt="xs" px="xs" textAlign="center" w="100%">
        {name}
      </Box>
    </S.Item>
  )
}
