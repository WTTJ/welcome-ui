import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const EotIcon: React.FC<IconProps> = props => {
  return <Icon alt="Eot" content={content} {...props} />
}
