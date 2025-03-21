import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const FingerprintIcon: React.FC<IconProps> = props => {
  return <Icon alt="Fingerprint" content={content} {...props} />
}
