import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const TreeIcon = (props: IconProps) => {
  return <Icon alt="Tree" content={content} {...props} />
}
