import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const DateIcon = (props: IconProps) => {
  return <Icon alt="Date" content={content} {...props} />
}
