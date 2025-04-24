import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const TtfIcon: React.FC<IconProps> = props => {
  return <Icon alt="Ttf" content={content} {...props} />
}
