import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const FlagEnIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagEn" content={content} {...props} />
}
