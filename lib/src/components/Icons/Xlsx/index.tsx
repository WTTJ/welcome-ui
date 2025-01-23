import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const XlsxIcon: React.FC<IconProps> = props => {
  return <Icon alt="Xlsx" content={content} {...props} />
}
