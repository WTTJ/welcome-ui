import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const DepartmentIcon = (props: IconProps) => {
  return <Icon alt="Department" content={content} {...props} />
}
