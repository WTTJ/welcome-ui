import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ResumeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Resume" content={content} {...props} />
}

export const ResumeIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
