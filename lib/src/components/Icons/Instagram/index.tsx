import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const InstagramIcon: React.FC<IconProps> = props => {
  return <Icon alt="Instagram" content={content} {...props} />
}
