import React from 'react'

import { List } from './List'
import basicEmojis from './basicEmojis.json'

export function BasicList(props) {
  return <List emojis={basicEmojis} {...props} />
}
