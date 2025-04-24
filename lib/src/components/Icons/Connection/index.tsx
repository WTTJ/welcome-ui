import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const ConnectionIcon: React.FC<IconProps> = props => {
  return <Icon alt="Connection" content={content} {...props} />
}
