import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const QuestionsIcon: React.FC<IconProps> = props => {
  return <Icon alt="Questions" content={content} {...props} />
}

export const QuestionsIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
