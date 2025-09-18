import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const PhoneIcon = (props: IconProps) => {
  return <Icon alt="Phone" content={content} {...props} />
}
