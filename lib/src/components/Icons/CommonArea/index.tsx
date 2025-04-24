import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const CommonAreaIcon: React.FC<IconProps> = props => {
  return <Icon alt="CommonArea" content={content} {...props} />
}
