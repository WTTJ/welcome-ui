import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const PicturesIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pictures" content={content} {...props} />
}
