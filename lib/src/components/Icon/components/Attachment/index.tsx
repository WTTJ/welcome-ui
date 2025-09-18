import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const AttachmentIcon = (props: IconProps) => {
  return <Icon alt="Attachment" content={content} {...props} />
}
