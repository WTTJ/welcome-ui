import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const EotIcon = (props: IconProps) => {
  return <Icon alt="Eot" content={content} {...props} />
}
