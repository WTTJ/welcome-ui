import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const FlagFrIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagFr" content={content} {...props} />
}
