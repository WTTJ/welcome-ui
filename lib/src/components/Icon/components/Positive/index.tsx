import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const PositiveIcon = (props: IconProps) => {
  return <Icon alt="Positive" content={content} {...props} />
}
