import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const SettingsIcon = (props: IconProps) => {
  return <Icon alt="Settings" content={content} {...props} />
}
