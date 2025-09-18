import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const MicroshipIcon = (props: IconProps) => {
  return <Icon alt="Microship" content={content} {...props} />
}
