import * as S from './styles'
import type { UsePopover } from './usePopover'

const transformMap = {
  bottom: 'rotateZ(360deg)',
  left: 'rotateZ(90deg)',
  right: 'rotateZ(-90deg)',
  top: 'rotateZ(180deg)',
}

type ArrowProps = {
  store: UsePopover
}

export const Arrow = ({ store }: ArrowProps) => {
  const placement = store.useState('currentPlacement')

  const [parentPlacement] = placement.split('-')
  const transform = transformMap[parentPlacement as keyof typeof transformMap]

  return (
    <S.Arrow store={store}>
      <S.ArrowItem $transform={transform} h={30} w={30} xmlns="http://www.w3.org/2000/svg">
        <path d="M7 30L15 22L23 30H7Z" fill="currentColor" fillRule="nonzero" id="stroke" />
        <path d="M8 30L15 23L22 30H8Z" fill="currentColor" fillRule="nonzero" />
      </S.ArrowItem>
    </S.Arrow>
  )
}
