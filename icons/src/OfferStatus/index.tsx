import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const OfferStatusIcon: React.FC<IconProps> = props => {
  return <Icon alt="OfferStatus" content={content} {...props} />
}

export const OfferStatusIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
