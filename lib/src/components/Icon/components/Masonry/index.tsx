import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const MasonryIcon = (props: IconProps) => {
  return <Icon alt="Masonry" content={content} {...props} />
}
