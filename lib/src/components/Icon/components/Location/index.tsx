import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const LocationIcon = (props: IconProps) => {
  return <Icon alt="Location" content={content} {...props} />
}
