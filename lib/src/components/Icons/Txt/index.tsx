import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TxtIcon: React.FC<IconProps> = props => {
  return <Icon alt="Txt" content={content} {...props} />
}
