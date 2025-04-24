import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const EarthIcon: React.FC<IconProps> = props => {
  return <Icon alt="Earth" content={content} {...props} />
}
