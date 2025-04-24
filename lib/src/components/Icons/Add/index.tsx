import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const AddIcon: React.FC<IconProps> = props => {
  return <Icon alt="Add" content={content} {...props} />
}
