import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const XIcon = (props: IconProps) => {
  return <Icon alt="X" content={content} {...props} />
}
