import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ActionsIcon: React.FC<IconProps> = props => {
  return <Icon alt="Actions" content={content} {...props} />
}
