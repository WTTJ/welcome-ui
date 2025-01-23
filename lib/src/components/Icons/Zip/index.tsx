import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ZipIcon: React.FC<IconProps> = props => {
  return <Icon alt="Zip" content={content} {...props} />
}
