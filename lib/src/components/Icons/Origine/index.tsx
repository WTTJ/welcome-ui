import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const OrigineIcon: React.FC<IconProps> = props => {
  return <Icon alt="Origine" content={content} {...props} />
}
