import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const SettingsIcon: React.FC<IconProps> = props => {
  return <Icon alt="Settings" content={content} {...props} />
}
