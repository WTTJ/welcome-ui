import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const ContractIcon: React.FC<IconProps> = props => {
  return <Icon alt="Contract" content={content} {...props} />
}
