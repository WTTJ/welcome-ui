import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const BulkIcon = (props: IconProps) => {
  return <Icon alt="Bulk" content={content} {...props} />
}
