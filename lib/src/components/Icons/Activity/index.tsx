import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const ActivityIcon: React.FC<IconProps> = props => {
  return <Icon alt="Activity" content={content} {...props} />
}
