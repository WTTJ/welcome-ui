import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const BehanceIcon: React.FC<IconProps> = props => {
  return <Icon alt="Behance" content={content} {...props} />
}
