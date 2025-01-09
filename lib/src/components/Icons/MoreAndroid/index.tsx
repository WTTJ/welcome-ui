import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const MoreAndroidIcon: React.FC<IconProps> = props => {
  return <Icon alt="MoreAndroid" content={content} {...props} />
}
