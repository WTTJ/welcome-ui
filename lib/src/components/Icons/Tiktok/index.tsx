import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const TiktokIcon: React.FC<IconProps> = props => {
  return <Icon alt="Tiktok" content={content} {...props} />
}
