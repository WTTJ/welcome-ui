import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const UpIcon = (props: IconProps) => {
  return <Icon alt="Up" content={content} {...props} />
}
