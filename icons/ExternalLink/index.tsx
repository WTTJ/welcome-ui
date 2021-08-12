import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ExternalLinkIcon: React.FC<IconProps> = props => {
  return <Icon alt="ExternalLink" content={content} {...props} />
}
