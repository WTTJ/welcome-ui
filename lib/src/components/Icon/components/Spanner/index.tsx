import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const SpannerIcon = (props: IconProps) => {
  return <Icon alt="Spanner" content={content} {...props} />
}
