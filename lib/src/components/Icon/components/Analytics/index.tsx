import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const AnalyticsIcon = (props: IconProps) => {
  return <Icon alt="Analytics" content={content} {...props} />
}
