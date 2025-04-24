import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const BurnIcon: React.FC<IconProps> = props => {
  return <Icon alt="Burn" content={content} {...props} />
}
