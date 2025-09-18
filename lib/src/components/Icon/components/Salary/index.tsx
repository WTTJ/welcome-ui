import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const SalaryIcon = (props: IconProps) => {
  return <Icon alt="Salary" content={content} {...props} />
}
