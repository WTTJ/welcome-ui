import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const GoogleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Google" content={content} {...props} />
}
