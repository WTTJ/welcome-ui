import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const BuoyIcon = (props: IconProps) => {
  return <Icon alt="Buoy" content={content} {...props} />
}
