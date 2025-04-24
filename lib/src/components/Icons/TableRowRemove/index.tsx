import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const TableRowRemoveIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableRowRemove" content={content} {...props} />
}
