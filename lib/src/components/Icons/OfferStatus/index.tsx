import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const OfferStatusIcon: React.FC<IconProps> = props => {
  return <Icon alt="OfferStatus" content={content} {...props} />
}
