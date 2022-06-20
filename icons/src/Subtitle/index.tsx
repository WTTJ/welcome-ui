import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SubtitleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Subtitle" content={content} {...props} />
}
