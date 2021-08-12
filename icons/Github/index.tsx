import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const GithubIcon: React.FC<IconProps> = props => {
  return <Icon alt="Github" content={content} {...props} />
}
