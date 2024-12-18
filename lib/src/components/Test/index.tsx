import React from 'react'

import * as S from './styles'

export type TestProps = {
  children: React.ReactNode
}

export const Test = ({ children }: TestProps) => {
  return <S.Test>{children}</S.Test>
}
