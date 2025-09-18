import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const PinterestIcon = (props: IconProps) => {
  return <Icon alt="Pinterest" content={content} {...props} />
}
