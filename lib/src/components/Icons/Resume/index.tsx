import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ResumeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Resume" content={content} {...props} />
}
