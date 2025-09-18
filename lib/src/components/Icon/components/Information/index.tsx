import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const InformationIcon = (props: IconProps) => {
  return <Icon alt="Information" content={content} {...props} />
}
