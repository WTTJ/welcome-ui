import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const PencilIcon = (props: IconProps) => {
  return <Icon content={content} {...props} />
}
