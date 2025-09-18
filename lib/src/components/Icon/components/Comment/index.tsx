import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const CommentIcon = (props: IconProps) => {
  return <Icon alt="Comment" content={content} {...props} />
}
