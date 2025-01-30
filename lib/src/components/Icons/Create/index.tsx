import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CreateIcon: React.FC<IconProps> = props => {
  return <Icon alt="Create" content={content} {...props} />
}
