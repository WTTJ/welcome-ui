import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const TabletIcon = (props: IconProps) => {
  return <Icon alt="Tablet" content={content} {...props} />
}
