import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const QuestionsIcon: React.FC<IconProps> = props => {
  return <Icon alt="Questions" content={content} {...props} />
}
