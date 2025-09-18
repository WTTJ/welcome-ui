import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const SuccessIcon = (props: IconProps) => {
  return <Icon alt="Success" content={content} {...props} />
}
