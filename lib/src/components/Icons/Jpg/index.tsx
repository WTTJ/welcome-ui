import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const JpgIcon: React.FC<IconProps> = props => {
  return <Icon alt="Jpg" content={content} {...props} />
}
