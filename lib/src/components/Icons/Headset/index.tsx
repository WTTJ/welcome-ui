import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const HeadsetIcon: React.FC<IconProps> = props => {
  return <Icon alt="Headset" content={content} {...props} />
}
