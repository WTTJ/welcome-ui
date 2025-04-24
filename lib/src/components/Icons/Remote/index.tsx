import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const RemoteIcon: React.FC<IconProps> = props => {
  return <Icon alt="Remote" content={content} {...props} />
}
