import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const DownIcon = (props: IconProps) => {
  return <Icon alt="Down" content={content} {...props} />
}
