import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const DishIcon = (props: IconProps) => {
  return <Icon alt="Dish" content={content} {...props} />
}
