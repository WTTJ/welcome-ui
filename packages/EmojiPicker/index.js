import React, { Children, cloneElement, forwardRef, useCallback, useMemo } from 'react'
import { func, node, object } from 'prop-types'
import { useTabState } from '@welcome-ui/tabs'
import { Popover, usePopoverState } from '@welcome-ui/popover'
import { Tab } from '@welcome-ui/tabs'

import * as S from './styles'
import { List } from './List'
import { BasicList } from './BasicList'

export const EmojiPicker = forwardRef(
  ({ children, defaultTabState = {}, onChange, ...popoverState }, ref) => {
    const tabState = useTabState(defaultTabState)

    const hidePopover = useMemo(() => popoverState.hide, [popoverState.hide])
    const handleChange = useCallback(
      value => {
        hidePopover()
        onChange(value)
      },
      [hidePopover, onChange]
    )

    const tabs = useMemo(() => {
      if (Children.count(children) === 0) {
        return [
          {
            name: 'basic',
            content: <BasicList isVisible={popoverState.visible} onChange={handleChange} />
          }
        ]
      }

      return Children.toArray(children)
        .filter(child => child.type === Tab || child.type === BasicList)
        .map(tab => ({
          name: tab.props.name,
          content: cloneElement(tab.props.children, {
            isVisible: popoverState.visible && tabState.selectedId === tab.props.name,
            onChange: handleChange
          })
        }))
    }, [children, handleChange, popoverState.visible, tabState.selectedId])
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
  /** Has to be a list of `<EmojiPicker.Tab />` or can be empty to show only basic emojis */
  children: node,
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
EmojiPicker.BasicList = BasicList
