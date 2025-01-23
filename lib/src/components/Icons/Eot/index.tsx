import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const EotIcon: React.FC<IconProps> = props => {
  return <Icon alt="Eot" content={content} {...props} />
}
