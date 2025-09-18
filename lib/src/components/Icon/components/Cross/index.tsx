import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const CrossIcon = (props: IconProps) => {
  return <Icon alt="Cross" content={content} {...props} />
}
