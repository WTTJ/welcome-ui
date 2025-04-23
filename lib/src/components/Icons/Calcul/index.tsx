import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CalculIcon: React.FC<IconProps> = props => {
  return <Icon alt="Calcul" content={content} {...props} />
}
