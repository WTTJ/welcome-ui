import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PicturesIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pictures" content={content} {...props} />
}
