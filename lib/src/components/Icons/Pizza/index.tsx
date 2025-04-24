import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const PizzaIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pizza" content={content} {...props} />
}
