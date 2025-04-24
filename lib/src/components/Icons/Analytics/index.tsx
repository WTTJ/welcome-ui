import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const AnalyticsIcon: React.FC<IconProps> = props => {
  return <Icon alt="Analytics" content={content} {...props} />
}
