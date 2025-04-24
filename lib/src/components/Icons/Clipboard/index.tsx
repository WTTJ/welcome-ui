import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const ClipboardIcon: React.FC<IconProps> = props => {
  return <Icon alt="Clipboard" content={content} {...props} />
}
