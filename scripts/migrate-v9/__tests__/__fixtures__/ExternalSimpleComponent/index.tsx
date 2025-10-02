import * as S from './styles'

export const SimpleComponent = () => {
  return (
    <S.Container>
      <S.Header>Simple Header</S.Header>
      <S.Content>
        <S.Button>Click me</S.Button>
      </S.Content>
    </S.Container>
  )
}
