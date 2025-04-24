import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const BulbIcon: React.FC<IconProps> = props => {
  return <Icon alt="Bulb" content={content} {...props} />
}
