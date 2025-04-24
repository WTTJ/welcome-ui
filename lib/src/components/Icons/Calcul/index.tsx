import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const CalculIcon: React.FC<IconProps> = props => {
  return <Icon alt="Calcul" content={content} {...props} />
}
