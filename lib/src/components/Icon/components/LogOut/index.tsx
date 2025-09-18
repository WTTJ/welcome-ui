import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const LogOutIcon = (props: IconProps) => {
  return <Icon alt="LogOut" content={content} {...props} />
}
