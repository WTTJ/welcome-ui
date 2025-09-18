import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const FactoryIcon = (props: IconProps) => {
  return <Icon alt="Factory" content={content} {...props} />
}
