import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const LinkedinIcon: React.FC<IconProps> = props => {
  return <Icon alt="Linkedin" content={content} {...props} />
}
