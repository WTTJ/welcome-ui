import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const RemoteIcon = (props: IconProps) => {
  return <Icon alt="Remote" content={content} {...props} />
}
