import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const QuestionIcon: React.FC<IconProps> = props => {
  return <Icon alt="Question" content={content} {...props} />
}
