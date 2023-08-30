import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SvgIcon: React.FC<IconProps> = props => {
  return <Icon alt="Svg" content={content} {...props} />
}

export const SvgIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
