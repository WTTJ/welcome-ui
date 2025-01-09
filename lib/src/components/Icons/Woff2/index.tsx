import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const Woff2Icon: React.FC<IconProps> = props => {
  return <Icon alt="Woff2" content={content} {...props} />
}
