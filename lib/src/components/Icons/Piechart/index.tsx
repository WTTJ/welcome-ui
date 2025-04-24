import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const PiechartIcon: React.FC<IconProps> = props => {
  return <Icon alt="Piechart" content={content} {...props} />
}
