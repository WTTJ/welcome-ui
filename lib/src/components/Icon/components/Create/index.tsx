import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const CreateIcon = (props: IconProps) => {
  return <Icon alt="Create" content={content} {...props} />
}
