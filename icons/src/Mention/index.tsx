import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MentionIcon: React.FC<IconProps> = props => {
  return <Icon alt="Mention" content={content} {...props} />
}
