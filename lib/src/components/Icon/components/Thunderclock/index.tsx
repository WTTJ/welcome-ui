import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const ThunderclockIcon = (props: IconProps) => {
  return <Icon alt="Thunderclock" content={content} {...props} />
}
