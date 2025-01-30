import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const InformationIcon: React.FC<IconProps> = props => {
  return <Icon alt="Information" content={content} {...props} />
}
