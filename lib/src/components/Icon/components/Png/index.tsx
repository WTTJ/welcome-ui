import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const PngIcon = (props: IconProps) => {
  return <Icon alt="Png" content={content} {...props} />
}
