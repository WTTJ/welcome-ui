import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const ContractIcon: React.FC<IconProps> = props => {
  return <Icon alt="Contract" content={content} {...props} />
}
