import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ContractIcon: React.FC<IconProps> = props => {
  return <Icon alt="Contract" content={content} {...props} />
}

export const ContractIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
