import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const JusticeHammerIcon: React.FC<IconProps> = props => {
  return <Icon alt="JusticeHammer" content={content} {...props} />
}
