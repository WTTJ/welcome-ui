import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const GoogleIcon = (props: IconProps) => {
  return <Icon alt="Google" content={content} {...props} />
}
