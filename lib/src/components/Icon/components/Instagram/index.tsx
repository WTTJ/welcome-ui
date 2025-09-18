import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const InstagramIcon = (props: IconProps) => {
  return <Icon alt="Instagram" content={content} {...props} />
}
