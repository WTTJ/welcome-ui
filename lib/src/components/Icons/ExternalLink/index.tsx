import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ExternalLinkIcon: React.FC<IconProps> = props => {
  return <Icon alt="ExternalLink" content={content} {...props} />
}
