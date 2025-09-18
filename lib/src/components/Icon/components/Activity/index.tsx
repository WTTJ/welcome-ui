import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const ActivityIcon = (props: IconProps) => {
  return <Icon alt="Activity" content={content} {...props} />
}
