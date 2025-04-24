import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const SoundOnIcon: React.FC<IconProps> = props => {
  return <Icon alt="SoundOn" content={content} {...props} />
}
