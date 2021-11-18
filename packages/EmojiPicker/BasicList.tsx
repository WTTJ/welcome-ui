import React from 'react'

import { List, ListProps } from './List'
import basicEmojis from './basicEmojis.json'

export const BasicList: React.FC<ListProps> = props => {
  return <List emojis={basicEmojis} {...props} />
}
