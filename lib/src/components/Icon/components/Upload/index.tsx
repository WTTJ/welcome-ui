import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const UploadIcon = (props: IconProps) => {
  return <Icon alt="Upload" content={content} {...props} />
}
