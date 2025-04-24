import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const PaperplaneIcon: React.FC<IconProps> = props => {
  return <Icon alt="Paperplane" content={content} {...props} />
}
