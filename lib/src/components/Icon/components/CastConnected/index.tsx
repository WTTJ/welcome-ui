import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const CastConnectedIcon = (props: IconProps) => {
  return <Icon alt="CastConnected" content={content} {...props} />
}
