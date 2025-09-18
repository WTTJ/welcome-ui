import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const ArrowUpIcon = (props: IconProps) => {
  return <Icon alt="ArrowUp" content={content} {...props} />
}
