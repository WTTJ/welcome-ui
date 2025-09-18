import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const CompassIcon = (props: IconProps) => {
  return <Icon alt="Compass" content={content} {...props} />
}
