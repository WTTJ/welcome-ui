import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const OrigineIcon = (props: IconProps) => {
  return <Icon alt="Origine" content={content} {...props} />
}
