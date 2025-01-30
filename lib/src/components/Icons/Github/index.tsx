import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const GithubIcon: React.FC<IconProps> = props => {
  return <Icon alt="Github" content={content} {...props} />
}
