import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const DownloadIcon: React.FC<IconProps> = props => {
  return <Icon alt="Download" content={content} {...props} />
}
