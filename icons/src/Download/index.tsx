import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const DownloadIcon: React.FC<IconProps> = props => {
  return <Icon alt="Download" content={content} {...props} />
}
