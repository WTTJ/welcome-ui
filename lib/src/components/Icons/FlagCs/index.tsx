import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const FlagCsIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagCs" content={content} {...props} />
}
