import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const TypeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Type" content={content} {...props} />
}
