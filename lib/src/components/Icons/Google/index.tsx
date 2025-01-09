import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const GoogleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Google" content={content} {...props} />
}
