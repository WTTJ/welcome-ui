import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const SaveIcon: React.FC<IconProps> = props => {
  return <Icon alt="Save" content={content} {...props} />
}
