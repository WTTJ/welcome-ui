import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const TableDivideIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableDivide" content={content} {...props} />
}
