import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function QuestionIcon(props) {
  return <Icon alt="Question" content={content} {...props} />
}
