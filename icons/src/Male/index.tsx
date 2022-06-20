import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MaleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Male" content={content} {...props} />
}
