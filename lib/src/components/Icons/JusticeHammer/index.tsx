import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const JusticeHammerIcon: React.FC<IconProps> = props => {
  return <Icon alt="JusticeHammer" content={content} {...props} />
}
