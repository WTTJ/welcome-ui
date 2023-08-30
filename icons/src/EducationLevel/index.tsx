import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const EducationLevelIcon: React.FC<IconProps> = props => {
  return <Icon alt="EducationLevel" content={content} {...props} />
}

export const EducationLevelIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
