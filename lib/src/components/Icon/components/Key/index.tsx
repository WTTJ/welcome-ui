import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const KeyIcon = (props: IconProps) => {
  return <Icon alt="Key" content={content} {...props} />
}
