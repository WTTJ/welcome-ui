import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const CastUnavailableIcon = (props: IconProps) => {
  return <Icon alt="CastUnavailable" content={content} {...props} />
}
