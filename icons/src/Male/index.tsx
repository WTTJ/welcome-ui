import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MaleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Male" content={content} {...props} />
}

export const MaleIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
