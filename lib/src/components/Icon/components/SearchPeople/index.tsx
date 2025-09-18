import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const SearchPeopleIcon = (props: IconProps) => {
  return <Icon alt="SearchPeople" content={content} {...props} />
}
