import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const TableColumnAddAfterIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableColumnAddAfter" content={content} {...props} />
}
