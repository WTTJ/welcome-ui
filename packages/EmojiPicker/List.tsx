import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { InputText } from '@welcome-ui/input-text'
import { FixedSizeList, ListChildComponentProps } from 'react-window'
import { Text } from '@welcome-ui/text'
import { Box } from '@welcome-ui/box'
import { Emoji, getEmojiName } from '@welcome-ui/emoji'
import { SearchIcon } from '@welcome-ui/icons'
import { useIsomorphicLayoutEffect } from '@welcome-ui/utils'
import debounce from 'lodash.debounce'
import escapeRegExp from 'lodash.escaperegexp'
import Popper from 'popper.js'

import * as S from './styles'
import {
  formatEmojis,
  getEmojiAlias,
  HEIGHT,
  InternalEmoji,
  NB_EMOJIS_PER_ROW,
  ROW_HEIGHT,
  WIDTH,
} from './utils'

export interface Emoji {
  name: string
  alias: string
  category: string
  url?: string
}

export interface ListOptions {
  emojis: Emoji[]
  emptyList: React.ReactNode
  inputSearchPlaceholder: string
  isVisible: boolean
  onChange: (value: string) => void
  value: string
}

export type ListProps = ListOptions

export const List: React.FC<ListProps> = ({
  emojis,
  emptyList,
  inputSearchPlaceholder,
  isVisible,
  onChange,
  value,
}) => {
  const [currentColIndex, setCurrentColIndex] = useState(-1)
  const [currentRowIndex, setCurrentRowIndex] = useState(-1)

  const inputRef = useRef(null)
  useEffect(() => {
    if (isVisible) {
      inputRef?.current?.focus()
    }
  }, [isVisible])

  const [query, setQuery] = useState<string>()
  const handleChangeQuery = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.trim()
    setQuery(query)
    const currentIndex = query ? 0 : -1
    setCurrentColIndex(currentIndex)
    setCurrentRowIndex(currentIndex)
  }, [])
  const debouncedHandleChangeQuery = useMemo(
    () => debounce(handleChangeQuery, 200),
    [handleChangeQuery]
  )

  const rows = useMemo(() => {
    const queryRegex = new RegExp(escapeRegExp(query), 'i')
    const filteredEmojis = emojis.filter(emoji => {
      return Object.values(emoji).some(value => queryRegex.test(value))
    })

    if (filteredEmojis.length === 0) return []

    return formatEmojis(filteredEmojis)
  }, [emojis, query])
  const hasRows = rows.length > 0
  const filteredEmojis = useMemo<InternalEmoji[][]>(() => {
    // Rows without categories
    return rows?.filter(row => typeof row[0] !== 'string') || []
  }, [rows])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter'].includes(e.key)) return
    e.preventDefault()

    // If pressing any arrows when no emoji is selected, select the first one
    if (
      currentColIndex === -1 &&
      currentRowIndex === -1 &&
      ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)
    ) {
      setCurrentColIndex(0)
      setCurrentRowIndex(0)
      return
    }

    if (e.key === 'Enter') {
      e.preventDefault()
      if (!filteredEmojis) return
      const emoji = filteredEmojis
        .flat()
        .find(emoji => emoji.rowIndex === currentRowIndex && emoji.colIndex === currentColIndex)
      onChange(getEmojiAlias(emoji))
      return
    }

    let newColIndex = currentColIndex
    let newRowIndex = currentRowIndex
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowRight': {
        const diff = e.key === 'ArrowLeft' ? -1 : 1
        newColIndex = currentColIndex + diff
        let currentRow = filteredEmojis[newRowIndex]
        // When going left while being at the start of the row
        if (newColIndex === -1) {
          // If already on the first row, stay on the first col
          if (currentRowIndex === 0) {
            newColIndex = 0
            break
          }
          newRowIndex = Math.max(newRowIndex - 1, 0)
          currentRow = filteredEmojis[newRowIndex]
          newColIndex = currentRow.length - 1
          // When going right while being at the end of the row
        } else if (newColIndex >= currentRow.length) {
          // If we're on the last row
          if (!filteredEmojis[newRowIndex + 1]) {
            newColIndex = currentColIndex
            break
          }
          newColIndex = 0
          newRowIndex = newRowIndex + 1
        }
        break
      }
      case 'ArrowUp':
      case 'ArrowDown': {
        const diff = e.key === 'ArrowUp' ? -1 : 1
        newRowIndex = Math.max(currentRowIndex + diff, 0)
        const newRow = filteredEmojis[newRowIndex]
        // If trying to go down when on the last row:
        // we go on the last col of the last row
        if (!newRow) {
          newRowIndex--
          newColIndex = filteredEmojis[newRowIndex].length - 1
        }
        // If the new row is shorter than the previous one
        // we go on the last col of the new row
        else if (!newRow[currentColIndex]) {
          newColIndex = newRow.length - 1
        }
        break
      }
    }

    setCurrentColIndex(newColIndex)
    setCurrentRowIndex(newRowIndex)
  }
  const handleMouseMove: (emoji: InternalEmoji) => void = emoji => {
    setCurrentColIndex(emoji.colIndex)
    setCurrentRowIndex(emoji.rowIndex)
  }

  // Custom tooltip to prevent having a tooltip per emoji
  const wrapperRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [tooltipEmoji, setTooltipEmoji] = useState<InternalEmoji>()
  const hasTooltip = !!tooltipEmoji
  const tooltipContent = getEmojiAlias(tooltipEmoji)
  useEffect(() => {
    const currentEl = wrapperRef?.current?.querySelector('[data-active]')
    if (!currentEl) {
      setTooltipEmoji(null)
      return
    }

    const emoji = filteredEmojis
      .flat()
      .find(emoji => emoji.rowIndex === currentRowIndex && emoji.colIndex === currentColIndex)
    setTooltipEmoji(emoji)
    const popper = new Popper(currentEl, tooltipRef?.current, {
      placement: 'top',
      onUpdate: ({ instance }) => {
        // We check the grandparent because the parent is the row
        const isReferenceInDom = !!(instance.reference as HTMLElement).parentElement.parentElement
        if (!isReferenceInDom) {
          setTooltipEmoji(null)
        }
      },
    })
    return () => popper.destroy()
  }, [currentColIndex, currentRowIndex, filteredEmojis])

  // Scroll to the selected emoji on first render & when using arrows
  const isJustOpened = useRef(true)
  const listRef = useRef<FixedSizeList<EmojiRowData>>()
  useIsomorphicLayoutEffect(() => {
    if (!isVisible || !listRef.current) return

    let rowIndex = currentRowIndex
    // Show the value on open
    if (isJustOpened.current) {
      const name = getEmojiName(value)
      const emoji = filteredEmojis.flat().find(emoji => emoji.alias === name)
      if (emoji) {
        setCurrentColIndex(emoji.colIndex)
        setCurrentRowIndex(emoji.rowIndex)
        rowIndex = emoji.rowIndex
      }
    }

    // We can't use `currentRowIndex` directly because we would skip the categories
    const index = rows.findIndex(emojis => emojis.some(emoji => emoji.rowIndex === rowIndex))
    // When opening the picker, we want the current selected emoji to be at the top
    const align = isJustOpened.current ? 'start' : 'auto'
    listRef.current.scrollToItem(index, align)
    isJustOpened.current = false
  }, [currentColIndex, currentRowIndex, isVisible])

  const initialScrollOffset = useMemo(() => {
    if (!isVisible) return 0

    // We can't use `currentPosition[0]` directly because we would skip the categories
    const index = rows.findIndex(emojis => emojis.some(emoji => emoji.rowIndex === currentRowIndex))
    return index * ROW_HEIGHT
  }, [currentRowIndex, isVisible, rows])

  return (
    <Box ref={wrapperRef}>
      <Box mx="xl" pb="sm" pt="xl">
        <InputText
          autoFocus
          data-testid="emoji-search-input"
          icon={<SearchIcon color="light-100" />}
          onChange={debouncedHandleChangeQuery}
          onKeyDown={handleKeyDown}
          placeholder={inputSearchPlaceholder}
          ref={inputRef}
        />
      </Box>
      {hasRows && (
        <FixedSizeList
          height={HEIGHT}
          initialScrollOffset={initialScrollOffset}
          itemCount={rows.length}
          itemData={{
            rows,
            currentColIndex,
            currentRowIndex,
            isVisible,
            onClick: onChange,
            onMouseMove: handleMouseMove,
          }}
          itemSize={ROW_HEIGHT}
          ref={listRef}
          width={WIDTH}
        >
          {EmojiRow}
        </FixedSizeList>
      )}
      {!hasRows && (
        <Box alignItems="center" display="flex" h={HEIGHT} justifyContent="center" w={WIDTH}>
          {emptyList}
        </Box>
      )}
      <S.Tooltip ref={tooltipRef}>{hasTooltip && tooltipContent}</S.Tooltip>
    </Box>
  )
}

interface EmojiRowData {
  rows: InternalEmoji[][]
  currentRowIndex: number
  currentColIndex: number
  isVisible: boolean
  onClick: (alias: string) => void
  onMouseMove: (emoji: InternalEmoji) => void
}

type EmojiRowProps = ListChildComponentProps<EmojiRowData>

const EmojiRow: React.FC<EmojiRowProps> = ({ data, index, style }) => {
  const row = data.rows[index]

  // Category
  if (typeof row[0] === 'string') {
    return (
      <Text
        alignItems="center"
        as="span"
        color="light-100"
        display="flex"
        px="xl"
        style={style}
        textTransform="uppercase"
        variant="subtitle-sm"
      >
        {row[0]}
      </Text>
    )
  }

  return (
    <Box display="flex" px="lg" style={style}>
      {row.map(emoji => {
        const alias = getEmojiAlias(emoji)
        // We want `null` instead of false to prevent to add the attribute to be in the DOM
        const isActive =
          data.isVisible &&
          emoji.rowIndex === data.currentRowIndex &&
          emoji.colIndex === data.currentColIndex
            ? true
            : null
        const emojiImage = emoji.url || alias

        return (
          <S.EmojiButton
            data-active={isActive}
            data-testid={`emoji-${alias}`}
            key={alias}
            onClick={() => data.onClick(getEmojiAlias(emoji))}
            onMouseMove={() => data.onMouseMove(emoji)}
            tabIndex={-1}
            type="button"
            w={`${100 / NB_EMOJIS_PER_ROW}%`}
          >
            <Emoji emoji={emojiImage} />
          </S.EmojiButton>
        )
      })}
    </Box>
  )
}
