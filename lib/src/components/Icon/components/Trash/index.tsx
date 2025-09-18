import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const TrashIcon = (props: IconProps) => {
  return <Icon alt="Trash" content={content} {...props} />
}
