import * as S from './styles'

type Variant = 'primary' | 'secondary'

export const ComplexComponent = ({ variant = 'primary' }: { variant?: Variant }) => {
  return (
    <S.Wrapper variant={variant}>
      <S.Card elevated>
        <S.Title>Complex Component</S.Title>
      </S.Card>
    </S.Wrapper>
  )
}
