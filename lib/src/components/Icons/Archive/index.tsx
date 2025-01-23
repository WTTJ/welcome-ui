import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ArchiveIcon: React.FC<IconProps> = props => {
  return <Icon alt="Archive" content={content} {...props} />
}
