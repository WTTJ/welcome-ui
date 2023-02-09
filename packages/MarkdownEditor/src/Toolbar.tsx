import React from 'react'
import { CreateWuiProps } from '@welcome-ui/system'

import * as S from './styles'
import { DefaultToolbarItem } from './constants'

const getTooltip = (item: string) =>
  `${item.charAt(0).toUpperCase()}${item.substr(1).toLowerCase()}`.replace('-', ' ')

export interface ToolbarOptions {
  active?: string[]
  items: DefaultToolbarItem[]
  onClick: (item: string, event: React.MouseEvent<HTMLAnchorElement>) => void
}

export type MarkdownEditorProps = CreateWuiProps<'div', ToolbarOptions>

export const Toolbar: React.FC<MarkdownEditorProps> = ({
  active = [],
  dataTestId,
  items = [],
  onClick,
  ...rest
}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const item = event.currentTarget.dataset.id
    onClick(item, event)
  }

  return (
    <S.Toolbar data-testid={dataTestId} {...rest}>
      {items.map(({ icon, name, title }, i) => {
        if (name === 'divider') {
          // eslint-disable-next-line react/no-array-index-key
          return <S.Divider key={i} />
        }

        return (
          <S.ToolbarIcon
            active={active.includes(name)}
            data-id={name}
            key={name}
            onClick={handleClick}
            title={getTooltip(title)}
          >
            {icon}
          </S.ToolbarIcon>
        )
      })}
    </S.Toolbar>
  )
}
