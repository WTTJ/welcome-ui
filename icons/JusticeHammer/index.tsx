import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const JusticeHammerIcon: React.FC<IconProps> = props => {
  return <Icon alt="JusticeHammer" content={content} {...props} />
}
