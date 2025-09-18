import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const HomeIcon = (props: IconProps) => {
  return <Icon alt="Home" content={content} {...props} />
}
