import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const ExtendIcon = (props: IconProps) => {
  return <Icon alt="Extend" content={content} {...props} />
}
