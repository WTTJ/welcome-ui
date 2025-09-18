import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const NotificationIcon = (props: IconProps) => {
  return <Icon alt="Notification" content={content} {...props} />
}
