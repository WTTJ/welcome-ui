import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const SlackIcon: React.FC<IconProps> = props => {
  return <Icon alt="Slack" content={content} {...props} />
}
