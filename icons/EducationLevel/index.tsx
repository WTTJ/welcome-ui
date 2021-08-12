import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const EducationLevelIcon: React.FC<IconProps> = props => {
  return <Icon alt="EducationLevel" content={content} {...props} />
}
