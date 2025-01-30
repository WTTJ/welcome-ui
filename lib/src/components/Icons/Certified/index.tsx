import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CertifiedIcon: React.FC<IconProps> = props => {
  return <Icon alt="Certified" content={content} {...props} />
}
