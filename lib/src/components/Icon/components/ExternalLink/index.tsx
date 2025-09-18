import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const ExternalLinkIcon = (props: IconProps) => {
  return <Icon alt="ExternalLink" content={content} {...props} />
}
