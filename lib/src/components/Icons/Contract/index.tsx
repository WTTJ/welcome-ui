import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ContractIcon: React.FC<IconProps> = props => {
  return <Icon alt="Contract" content={content} {...props} />
}
