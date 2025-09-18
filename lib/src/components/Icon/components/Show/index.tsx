import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const ShowIcon = (props: IconProps) => {
  return <Icon alt="Show" content={content} {...props} />
}
