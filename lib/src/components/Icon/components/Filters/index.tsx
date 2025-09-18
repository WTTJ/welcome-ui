import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const FiltersIcon = (props: IconProps) => {
  return <Icon alt="Filters" content={content} {...props} />
}
