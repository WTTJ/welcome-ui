import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const TableIcon = (props: IconProps) => {
  return <Icon alt="Table" content={content} {...props} />
}
