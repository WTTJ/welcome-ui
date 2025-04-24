import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const PuzzleOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="PuzzleOutline" content={content} {...props} />
}
