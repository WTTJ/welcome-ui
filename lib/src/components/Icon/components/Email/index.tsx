import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const EmailIcon = (props: IconProps) => {
  return <Icon alt="Email" content={content} {...props} />
}
