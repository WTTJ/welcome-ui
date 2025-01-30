import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const FiltersIcon: React.FC<IconProps> = props => {
  return <Icon alt="Filters" content={content} {...props} />
}
