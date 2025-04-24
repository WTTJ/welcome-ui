import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const TrophyIcon: React.FC<IconProps> = props => {
  return <Icon alt="Trophy" content={content} {...props} />
}
