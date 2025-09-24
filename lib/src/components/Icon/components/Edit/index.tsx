import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const EditIcon = (props: IconProps) => {
  return <Icon content={content} {...props} />
}
