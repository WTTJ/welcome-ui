import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const CommentIcon: React.FC<IconProps> = props => {
  return <Icon alt="Comment" content={content} {...props} />
}
