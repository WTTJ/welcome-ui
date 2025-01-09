import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const InformationIcon: React.FC<IconProps> = props => {
  return <Icon alt="Information" content={content} {...props} />
}
