import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const SaveIcon = (props: IconProps) => {
  return <Icon alt="Save" content={content} {...props} />
}
