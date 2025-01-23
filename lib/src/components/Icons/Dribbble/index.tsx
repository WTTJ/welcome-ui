import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const DribbbleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Dribbble" content={content} {...props} />
}
