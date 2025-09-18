import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const ComputerIcon = (props: IconProps) => {
  return <Icon alt="Computer" content={content} {...props} />
}
