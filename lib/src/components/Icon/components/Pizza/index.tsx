import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const PizzaIcon = (props: IconProps) => {
  return <Icon alt="Pizza" content={content} {...props} />
}
