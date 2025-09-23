import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const PuzzleIcon = (props: IconProps) => {
  return <Icon content={content} {...props} />
}
