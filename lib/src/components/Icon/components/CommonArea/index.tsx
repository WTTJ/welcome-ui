import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const CommonAreaIcon = (props: IconProps) => {
  return <Icon alt="CommonArea" content={content} {...props} />
}
