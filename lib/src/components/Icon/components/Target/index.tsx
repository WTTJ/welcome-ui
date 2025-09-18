import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const TargetIcon = (props: IconProps) => {
  return <Icon alt="Target" content={content} {...props} />
}
