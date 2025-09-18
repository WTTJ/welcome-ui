import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const GearIcon = (props: IconProps) => {
  return <Icon alt="Gear" content={content} {...props} />
}
