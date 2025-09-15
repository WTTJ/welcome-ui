import React from 'react'

import type { IconProps } from '../../Icon'
import { Icon } from '../../Icon'

import content from './content.json'

export const QuestionIcon: React.FC<IconProps> = props => {
  return <Icon alt="Question" content={content} data-wui-icon {...props} />
}
