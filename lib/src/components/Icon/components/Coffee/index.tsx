import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const CoffeeIcon = (props: IconProps) => {
  return <Icon alt="Coffee" content={content} {...props} />
}
