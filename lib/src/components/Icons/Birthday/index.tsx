import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const BirthdayIcon: React.FC<IconProps> = props => {
  return <Icon alt="Birthday" content={content} {...props} />
}
