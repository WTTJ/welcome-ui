import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const CertifiedIcon = (props: IconProps) => {
  return <Icon alt="Certified" content={content} {...props} />
}
