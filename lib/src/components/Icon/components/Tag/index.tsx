import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const TagIcon = (props: IconProps) => {
  return <Icon alt="Tag" content={content} {...props} />
}
