import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const MegaphoneIcon = (props: IconProps) => {
  return <Icon alt="Megaphone" content={content} {...props} />
}
