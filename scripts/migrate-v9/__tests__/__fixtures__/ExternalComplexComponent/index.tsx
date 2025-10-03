import * as S from './styles'

type Variant = 'primary' | 'secondary'

export const ComplexComponent = ({ variant = 'primary' }: { variant?: Variant }) => {
  return (
    <S.Wrapper variant={variant}>
      <S.Card elevated>
        <S.Title displayDetail>Complex component</S.Title>
      </S.Card>
      <S.TriggerButton $isActive={true} $isExpanded={false}>
        Toggle
      </S.TriggerButton>
    </S.Wrapper>
  )
}
