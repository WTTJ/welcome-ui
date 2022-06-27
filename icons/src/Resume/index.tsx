import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ResumeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Resume" content={content} {...props} />
}
