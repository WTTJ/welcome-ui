import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const TiktokIcon = (props: IconProps) => {
  return <Icon alt="Tiktok" content={content} {...props} />
}
