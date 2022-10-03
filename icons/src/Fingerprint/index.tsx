import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FingerprintIcon: React.FC<IconProps> = props => {
  return <Icon alt="Fingerprint" content={content} {...props} />
}
