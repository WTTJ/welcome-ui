import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const PptIcon: React.FC<IconProps> = props => {
  return <Icon alt="Ppt" content={content} {...props} />
}
