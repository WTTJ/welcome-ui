import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const RefreshIcon = (props: IconProps) => {
  return <Icon alt="Refresh" content={content} {...props} />
}
