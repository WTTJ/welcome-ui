import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const DetailsIcon = (props: IconProps) => {
  return <Icon alt="Details" content={content} {...props} />
}
