export const ARROW_SIZE = 12
export const ARROW_SPACER = ARROW_SIZE * 1.5

export const getTransformClass = (placement: string) => {
  const position = placement?.split('-')
  if (position.length < 2) {
    return `transform-${position[0]}`
  }
  return `transform-${placement}`
}

export const getYPosition = (placement: string, popoverHeight: number) => {
  //To avoid offsetting the arrow outside its parent, we check that the sizer is not bigger than the tooltip size
  const isPopoverSmall = popoverHeight - ARROW_SPACER < ARROW_SIZE

  if (placement.includes('end')) {
    return isPopoverSmall ? `${ARROW_SIZE}px` : `calc(100% - ${ARROW_SPACER}px)`
  }
  if (placement.includes('start')) {
    return isPopoverSmall ? `${ARROW_SIZE}px` : `${ARROW_SPACER}px`
  }
  return '50%'
}
