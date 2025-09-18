import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const RemoveIcon = (props: IconProps) => {
  return <Icon alt="Remove" content={content} {...props} />
}
