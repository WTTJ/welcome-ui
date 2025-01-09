import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const QuestionIcon: React.FC<IconProps> = props => {
  return <Icon alt="Question" content={content} {...props} />
}
