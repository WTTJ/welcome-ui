import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const OfferStatusIcon: React.FC<IconProps> = props => {
  return <Icon alt="OfferStatus" content={content} {...props} />
}
