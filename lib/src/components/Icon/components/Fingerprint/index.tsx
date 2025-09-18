import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const FingerprintIcon = (props: IconProps) => {
  return <Icon alt="Fingerprint" content={content} {...props} />
}
