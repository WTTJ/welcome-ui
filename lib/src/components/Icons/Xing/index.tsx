import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const XingIcon: React.FC<IconProps> = props => {
  return <Icon alt="Xing" content={content} {...props} />
}
