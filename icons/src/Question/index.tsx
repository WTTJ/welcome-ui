import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const QuestionIcon: React.FC<IconProps> = props => {
  return <Icon alt="Question" content={content} {...props} />
}

export const QuestionIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
