import React, { Children, cloneElement, forwardRef, useMemo } from 'react'
import { func, node, object } from 'prop-types'
import { useTabState } from '@welcome-ui/tabs'
import { Popover, usePopoverState } from '@welcome-ui/popover'
import { Tab } from '@welcome-ui/tabs'

import { List } from './List'
import * as S from './styles'

export const EmojiPicker = forwardRef(
  ({ children, defaultTabState = {}, onChange, ...popoverState }, ref) => {
    const tabState = useTabState(defaultTabState)
    const tabs = useMemo(
      () =>
        Children.toArray(children)
          .filter(child => child.type === Tab)
          .map(tab => ({
            name: tab.props.name,
            content: cloneElement(tab.props.children, {
              isCurrentTab: popoverState.visible && tabState.selectedId === tab.props.name,
              onChange: value => {
                popoverState.hide()
                onChange(value)
              }
            })
          })),
      [children, onChange, popoverState, tabState.selectedId]
    )
    const hasTabs = tabs.length > 1
    const onlyTabContent = tabs[0].content

    return (
      <S.Popover aria-label="TODO:" arrowStyle={{ display: 'none' }} ref={ref} {...popoverState}>
        {hasTabs && (
          <>
            <S.TabList aria-label="TODO:" {...tabState}>
              {tabs.map(tab => (
                <Tab id={tab.name} key={tab.name} {...tabState}>
                  {tab.name}
                </Tab>
              ))}
            </S.TabList>
            {tabs.map(tab => (
              <Tab.Panel key={tab.name} tabId={tab.name} {...tabState}>
                {tab.content}
              </Tab.Panel>
            ))}
          </>
        )}
        {!hasTabs && onlyTabContent}
      </S.Popover>
    )
  }
)

EmojiPicker.displayName = 'EmojiPicker'
EmojiPicker.propTypes = {
  /** Has to be a list of `<EmojiPicker.Tab />` */
  children: node.isRequired,
  /** See useTabState */
  defaultTabState: object,
  onChange: func.isRequired
}

export const useEmojiPicker = options =>
  usePopoverState({
    placement: 'bottom-start',
    ...options
  })

EmojiPicker.Trigger = Popover.Trigger
EmojiPicker.Tab = Tab
EmojiPicker.List = List
