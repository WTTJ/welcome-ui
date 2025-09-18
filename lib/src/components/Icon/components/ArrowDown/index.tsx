import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const ArrowDownIcon = (props: IconProps) => {
  return <Icon alt="ArrowDown" content={content} {...props} />
}
