import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const CertifiedIcon: React.FC<IconProps> = props => {
  return <Icon alt="Certified" content={content} {...props} />
}
