import { get } from '../theme/helpers'

export const getTransitions = (elements, speed = 'md', curve = 'ease') => props => {
  const transitionSpeed = get(`transitions.speed.${speed}`)(props)
  const transitionCurve = get(`transitions.curve.${curve}`)(props)

  return elements
    .reduce((prev, curr) => [...prev, `${curr} ${transitionSpeed} ${transitionCurve}`], [])
    .join(', ')
}
