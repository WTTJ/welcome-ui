import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const SearchIcon = (props: IconProps) => {
  return <Icon alt="Search" content={content} {...props} />
}
