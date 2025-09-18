import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const TxtIcon = (props: IconProps) => {
  return <Icon alt="Txt" content={content} {...props} />
}
