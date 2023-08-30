import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SuitcaseIcon: React.FC<IconProps> = props => {
  return <Icon alt="Suitcase" content={content} {...props} />
}

export const SuitcaseIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
