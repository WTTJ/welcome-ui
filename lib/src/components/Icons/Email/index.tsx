import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const EmailIcon: React.FC<IconProps> = props => {
  return <Icon alt="Email" content={content} {...props} />
}
