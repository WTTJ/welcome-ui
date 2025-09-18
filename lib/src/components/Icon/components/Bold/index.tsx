import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const BoldIcon = (props: IconProps) => {
  return <Icon alt="Bold" content={content} {...props} />
}
