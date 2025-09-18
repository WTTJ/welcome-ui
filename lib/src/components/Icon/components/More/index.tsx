import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const MoreIcon = (props: IconProps) => {
  return <Icon alt="More" content={content} {...props} />
}
