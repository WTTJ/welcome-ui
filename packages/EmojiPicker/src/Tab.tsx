import React from 'react'
import { Tab, TabProps } from '@welcome-ui/tabs'
import { CreateWuiProps } from '@welcome-ui/system'

export interface EmojiTabOptions {
  name: string
}

export type EmojiTabProps = CreateWuiProps<typeof Tab, EmojiTabOptions & Omit<TabProps, 'ref'>>

export const EmojiTab: React.FC<EmojiTabProps> = ({
  // We disable it for 'name' since it is only used to sort children in EmojiPicker component
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  name,
  ...props
}) => {
  return <Tab {...props} />
}

EmojiTab.displayName = 'EmojiTab'
