import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const MoreAndroidIcon: React.FC<IconProps> = props => {
  return <Icon alt="MoreAndroid" content={content} {...props} />
}
