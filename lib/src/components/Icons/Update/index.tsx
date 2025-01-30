import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const UpdateIcon: React.FC<IconProps> = props => {
  return <Icon alt="Update" content={content} {...props} />
}
