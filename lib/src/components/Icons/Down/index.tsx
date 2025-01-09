import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const DownIcon: React.FC<IconProps> = props => {
  return <Icon alt="Down" content={content} {...props} />
}
