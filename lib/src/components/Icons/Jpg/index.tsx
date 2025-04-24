import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const JpgIcon: React.FC<IconProps> = props => {
  return <Icon alt="Jpg" content={content} {...props} />
}
