import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const QuestionsIcon: React.FC<IconProps> = props => {
  return <Icon alt="Questions" content={content} {...props} />
}
