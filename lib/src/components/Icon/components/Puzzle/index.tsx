import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const PuzzleIcon = (props: IconProps) => {
  return <Icon alt="Puzzle" content={content} {...props} />
}
