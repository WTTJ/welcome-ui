import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const YoutubeIcon = (props: IconProps) => {
  return <Icon alt="Youtube" content={content} {...props} />
}
