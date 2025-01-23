import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const EducationLevelIcon: React.FC<IconProps> = props => {
  return <Icon alt="EducationLevel" content={content} {...props} />
}
