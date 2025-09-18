import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const ResetIcon = (props: IconProps) => {
  return <Icon alt="Reset" content={content} {...props} />
}
