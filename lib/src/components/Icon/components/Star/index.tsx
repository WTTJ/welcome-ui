import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const StarIcon = (props: IconProps) => {
  return <Icon alt="Star" content={content} {...props} />
}
