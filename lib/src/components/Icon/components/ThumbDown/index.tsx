import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const ThumbDownIcon = (props: IconProps) => {
  return <Icon alt="ThumbDown" content={content} {...props} />
}
