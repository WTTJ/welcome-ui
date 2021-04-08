/* eslint-disable react/no-multi-comp */
import React, { Children, useLayoutEffect, useMemo, useRef } from 'react'
import { array, bool, func, number, object, oneOf, shape, string } from 'prop-types'
import { useTabState } from '@welcome-ui/tabs'
import { Popover, usePopoverState } from '@welcome-ui/popover'
import { InputText } from '@welcome-ui/input-text'
import { FixedSizeList } from 'react-window'
import { Text } from '@welcome-ui/text'
import { Box } from '@welcome-ui/box'
import groupBy from 'lodash.groupby'

import * as S from './styles'
import {
  formatEmojis,
  getEmojiAlias,
  getEmojiName,
  HEIGHT,
  NB_EMOJIS_PER_ROW,
  ROW_HEIGHT,
  WIDTH
} from './utils'
import { Tab } from './Tab'
import { Panel } from './Panel'

const EMOJI_PATH = 'https://cdn.welcometothejungle.com/common/assets/emojis/'
const isApple = true
// typeof window !== undefined &&
// Bowser.parse(window.navigator.userAgent).platform.vendor === 'Apple'
const getEmojiSrc = emoji => {
  if (/^https:\/\//.test(emoji)) return emoji
  return `${EMOJI_PATH}${isApple ? 'apple/' : 'google/'}${encodeURIComponent(emoji)}.png`
}

export function Emoji({ emoji, ...rest }) {
  if (!emoji) return null

  return (
    <Box
      as="img"
      height={30}
      src={getEmojiSrc(emoji)}
      verticalAlign="text-bottom"
      width={30}
      {...rest}
    />
  )
}

Emoji.propTypes = {
  // The slack emoji, e.g: :martin-qui-mange-un-sandwich-au-jambon:
  emoji: string
}

export function List({
  currentColIndex,
  currentRowIndex,
  emojis,
  isCurrentTab,
  onClick,
  onMouseMove
}) {
  // Scroll to the selected emoji if using the arrows
  const isFirstRender = useRef(true)
  const listRef = useRef()
  useLayoutEffect(() => {
    if (!isCurrentTab) return

    // We can't use `currentRowIndex` directly because we would skip the categories
    const index = emojis.findIndex(emojis =>
      emojis.some(emoji => emoji.rowIndex === currentRowIndex)
    )
    // When opening the picker, we want the current selected emoji to be at the top
    const align = isFirstRender.current ? 'start' : 'auto'
    listRef.current.scrollToItem(index, align)
    isFirstRender.current = false
  }, [currentColIndex, currentRowIndex, emojis, isCurrentTab])

  const initialScrollOffset = useMemo(() => {
    if (!isCurrentTab) return 0

    // We can't use `currentPosition[0]` directly because we would skip the categories
    const index = emojis.findIndex(emojis =>
      emojis.some(emoji => emoji.rowIndex === currentRowIndex)
    )
    return index * ROW_HEIGHT
    // We want to calculate this only on mount on purpose
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const rows = useMemo(() => formatEmojis(groupBy(emojis, 'category')), [emojis])

  return (
    <>
      <Box mx="xl">
        <InputText />
      </Box>
      <FixedSizeList
        height={HEIGHT}
        initialScrollOffset={initialScrollOffset}
        itemCount={rows.length}
        itemData={{
          rows,
          onClick,
          currentColIndex,
          currentRowIndex,
          isCurrentTab,
          onMouseMove
        }}
        itemSize={ROW_HEIGHT}
        ref={listRef}
        width={WIDTH}
      >
        {EmojiRow}
      </FixedSizeList>
    </>
  )
}

List.propTypes = {
  currentColIndex: number.isRequired,
  currentRowIndex: number.isRequired,
  emojis: array.isRequired,
  isCurrentTab: bool.isRequired,
  onClick: func.isRequired,
  onMouseMove: func.isRequired
}

function EmojiRow({ data, index, style }) {
  const rowData = data.rows[index]
  if (typeof rowData[0] === 'string') {
    return (
      <Text
        alignItems="center"
        as="span"
        color="light.100"
        display="flex"
        px="xl"
        style={style}
        textTransform="uppercase"
        variant="subtitle2"
      >
        {rowData[0]}
      </Text>
    )
  }

  return (
    <Box display="flex" px="lg" style={style}>
      {rowData.map(emoji => {
        const alias = getEmojiAlias(emoji)
        // We want `null` instead of false to prevent to add the attribute to be in the DOM
        const isActive =
          data.isCurrentTab &&
          emoji.rowIndex === data.currentRowIndex &&
          emoji.colIndex === data.currentColIndex
            ? true
            : null

        return (
          <S.EmojiButton
            data-active={isActive}
            data-testid={`emoji-${alias}`}
            key={alias}
            // onClick={() => data.onClick(getEmojiValue(emoji))}
            // onMouseMove={() => data.onMouseMove(emoji)}
            tabIndex="-1"
            w={`${100 / NB_EMOJIS_PER_ROW}%`}
          >
            <Emoji emoji={getEmojiName(alias)} height={24} width={24} />
          </S.EmojiButton>
        )
      })}
    </Box>
  )
}
EmojiRow.propTypes = {
  data: shape({
    rows: array.isRequired,
    onClick: func.isRequired,
    onMouseMove: func.isRequired,
    currentColIndex: number.isRequired,
    currentRowIndex: number.isRequired
  }).isRequired,
  index: number.isRequired,
  style: object.isRequired
}

export const EmojiPicker = ({ children }) => {
  const popover = usePopoverState({ placement: 'bottom-start' })
  const tab = useTabState({ selectedId: 'basic' })
  const elements = Children.toArray(children).filter(child => child.type === Tab)
  return (
    <>
      <Popover.Trigger {...popover}>emoji list</Popover.Trigger>
      <S.Popover aria-label="usage popover" arrowStyle={{ display: 'none' }} {...popover}>
        <S.TabList aria-label="EmojiPicker Tabs" {...tab}>
          {elements.map(child => (
            <Tab key={tab.id} tab={tab}>
              {child.props.name}
            </Tab>
          ))}
        </S.TabList>
        {elements.map(child => (
          <Panel key={tab.id} tab={tab}>
            {child.props.children}
          </Panel>
        ))}
      </S.Popover>
    </>
  )
}

EmojiPicker.Tab = Tab
EmojiPicker.List = List
EmojiPicker.displayName = 'EmojiPicker'

EmojiPicker.propTypes = {
  children: oneOf([array, object])
}
