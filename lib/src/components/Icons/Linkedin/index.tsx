import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const LinkedinIcon: React.FC<IconProps> = props => {
  return <Icon alt="Linkedin" content={content} {...props} />
}
