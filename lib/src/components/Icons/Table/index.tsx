import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const TableIcon: React.FC<IconProps> = props => {
  return <Icon alt="Table" content={content} {...props} />
}
