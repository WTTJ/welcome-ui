import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const CoffeeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Coffee" content={content} {...props} />
}
