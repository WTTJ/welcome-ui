import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PiechartIcon: React.FC<IconProps> = props => {
  return <Icon alt="Piechart" content={content} {...props} />
}
