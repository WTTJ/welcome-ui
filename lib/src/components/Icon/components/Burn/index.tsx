import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const BurnIcon = (props: IconProps) => {
  return <Icon alt="Burn" content={content} {...props} />
}
