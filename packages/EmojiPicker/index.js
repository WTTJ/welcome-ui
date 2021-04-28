import React, { Children, cloneElement, forwardRef, useCallback, useMemo } from 'react'
import { func, node, object, string } from 'prop-types'
import { useTabState } from '@welcome-ui/tabs'
import { Popover, usePopoverState } from '@welcome-ui/popover'
import { Tab } from '@welcome-ui/tabs'

import * as S from './styles'
import { List } from './List'
import { Panel } from './Panel'
import { BasicList } from './BasicList'

export const EmojiPicker = forwardRef(
  (
    {
      children,
      defaultTabState = {},
      emptyList = 'No emojis found for your query 😔',
      inputSearchPlaceholder = 'Search an emoji',
      onChange,
      popoverAriaLabel = 'Emoji picker',
      tabListAriaLabel = 'Emoji picker tabs',
      value,
      ...popoverState
    },
    ref
  ) => {
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
            content: (
              <BasicList isVisible={popoverState.visible} onChange={handleChange} value={value} />
            )
          }
        ]
      }

      return Children.toArray(children)
        .filter(child => child.type === Tab)
        .map(tab => {
          const name = tab.props.name

          if ([BasicList, List].includes(tab.props.children.type)) {
            return {
              name,
              content: cloneElement(tab.props.children, {
                emptyList,
                inputSearchPlaceholder,
                isVisible:
                  popoverState.visible &&
                  (!tabState.selectedId || tabState.selectedId === tab.props.name),
                onChange: handleChange,
                value,
                ...tab.props.children.props
              })
            }
          }

          return {
            name,
            content: tab.props.children
          }
        })
    }, [
      children,
      emptyList,
      handleChange,
      inputSearchPlaceholder,
      popoverState.visible,
      tabState.selectedId,
      value
    ])
    const hasTabs = tabs.length > 1
    const onlyTabContent = tabs[0].content

    return (
      <S.Popover
        aria-label={popoverAriaLabel}
        arrowStyle={{ display: 'none' }}
        ref={ref}
        {...popoverState}
      >
        {hasTabs && (
          <>
            <S.TabList aria-label={tabListAriaLabel} {...tabState}>
              {tabs.map(tab => (
                <Tab id={tab.name} key={tab.name} type="button" {...tabState}>
                  {tab.name}
                </Tab>
              ))}
            </S.TabList>
            {tabs.map(tab => (
              <Tab.Panel key={tab.name} tabId={tab.name} {...tabState}>
                <Panel>{tab.content}</Panel>
              </Tab.Panel>
            ))}
          </>
        )}
        {!hasTabs && <Panel>{onlyTabContent}</Panel>}
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
  emptyList: node,
  inputSearchPlaceholder: string,
  onChange: func.isRequired,
  popoverAriaLabel: string,
  tabListAriaLabel: string,
  value: string
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
