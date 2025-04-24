import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const Share2Icon: React.FC<IconProps> = props => {
  return <Icon alt="Share2" content={content} {...props} />
}
