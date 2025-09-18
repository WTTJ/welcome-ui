import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const InformationOutlineIcon = (props: IconProps) => {
  return <Icon alt="InformationOutline" content={content} {...props} />
}
