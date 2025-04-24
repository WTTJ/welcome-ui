import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const ArchiveIcon: React.FC<IconProps> = props => {
  return <Icon alt="Archive" content={content} {...props} />
}
