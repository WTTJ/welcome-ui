import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const DownloadIcon = (props: IconProps) => {
  return <Icon alt="Download" content={content} {...props} />
}
