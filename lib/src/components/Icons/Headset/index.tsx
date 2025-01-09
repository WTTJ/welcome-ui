import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const HeadsetIcon: React.FC<IconProps> = props => {
  return <Icon alt="Headset" content={content} {...props} />
}
