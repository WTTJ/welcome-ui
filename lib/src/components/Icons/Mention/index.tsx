import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const MentionIcon: React.FC<IconProps> = props => {
  return <Icon alt="Mention" content={content} {...props} />
}
