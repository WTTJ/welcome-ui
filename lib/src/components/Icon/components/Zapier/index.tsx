import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const ZapierIcon = (props: IconProps) => {
  return <Icon alt="Zapier" content={content} {...props} />
}
