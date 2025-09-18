import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const TwitterIcon = (props: IconProps) => {
  return <Icon alt="Twitter" content={content} {...props} />
}
