import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const UpdateIcon = (props: IconProps) => {
  return <Icon alt="Update" content={content} {...props} />
}
