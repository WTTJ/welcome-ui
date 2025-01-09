import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const RightIcon: React.FC<IconProps> = props => {
  return <Icon alt="Right" content={content} {...props} />
}
