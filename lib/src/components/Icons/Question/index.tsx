import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const QuestionIcon: React.FC<IconProps> = props => {
  return <Icon alt="Question" content={content} {...props} />
}
