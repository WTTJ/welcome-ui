import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const DragAndDropIcon = (props: IconProps) => {
  return <Icon alt="DragAndDrop" content={content} {...props} />
}
