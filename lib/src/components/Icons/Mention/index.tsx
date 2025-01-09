import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const MentionIcon: React.FC<IconProps> = props => {
  return <Icon alt="Mention" content={content} {...props} />
}
