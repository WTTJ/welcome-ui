import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const SubtitleIcon = (props: IconProps) => {
  return <Icon alt="Subtitle" content={content} {...props} />
}
