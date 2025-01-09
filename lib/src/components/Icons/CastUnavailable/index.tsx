import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const CastUnavailableIcon: React.FC<IconProps> = props => {
  return <Icon alt="CastUnavailable" content={content} {...props} />
}
