import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const ClipboardIcon = (props: IconProps) => {
  return <Icon alt="Clipboard" content={content} {...props} />
}
