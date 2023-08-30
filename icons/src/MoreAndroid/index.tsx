import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MoreAndroidIcon: React.FC<IconProps> = props => {
  return <Icon alt="MoreAndroid" content={content} {...props} />
}

export const MoreAndroidIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
