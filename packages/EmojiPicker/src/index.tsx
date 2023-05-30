import React, { Children, cloneElement, useCallback, useMemo } from 'react'
import { useTabState } from '@welcome-ui/tabs'
import {
  Popover,
  PopoverProps,
  usePopoverState,
  UsePopoverStateOptions,
  UsePopoverStateReturn,
} from '@welcome-ui/popover'
import { Tab } from '@welcome-ui/tabs'
import { TabInitialState } from 'reakit'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'
import { List } from './List'
import { Panel } from './Panel'
import { BasicList } from './BasicList'
import { EmojiTab, EmojiTabProps } from './Tab'

export interface EmojiPickerOptions {
  defaultTabState?: TabInitialState
  emptyList?: string
  inputSearchPlaceholder?: string
  onChange?: (value: string) => void
  popoverAriaLabel?: string
  tabListAriaLabel?: string
  value: string | null
}

export type EmojiPickerProps = CreateWuiProps<'div', EmojiPickerOptions & PopoverProps>

const EmojiPickerComponent = forwardRef<'div', EmojiPickerProps>(
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
      state,
    },
    ref
  ) => {
    const tabState = useTabState(defaultTabState)

    const hidePopover = useMemo(() => state.hide, [state.hide])
    const handleChange = useCallback(
      (value: string) => {
        hidePopover()
        onChange?.(value)
      },
      [hidePopover, onChange]
    )

    const tabs = useMemo(() => {
      if (Children.count(children) === 0) {
        return [
          {
            name: 'basic',
            content: (
              // Disabling type check since missing props are injected below with the "cloneElement"
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              <BasicList isVisible={state.visible} onChange={handleChange} value={value} />
            ),
          },
        ]
      }

      return Children.toArray(children)
        .filter((child: React.ReactElement) => child.type === EmojiTab)
        .map((tab: React.ReactElement<EmojiTabProps>) => {
          const name = tab.props.name
          const child =
            Children.only(tab.props.children) &&
            (Children.only(tab.props.children) as React.ReactElement)

          if (child && (child.type === List || child.type === BasicList)) {
            return {
              name,
              content: cloneElement(child, {
                emptyList,
                inputSearchPlaceholder,
                isVisible:
                  state.visible && (!tabState.selectedId || tabState.selectedId === tab.props.name),
                onChange: handleChange,
                value,
                ...child.props,
              }),
            }
          }

          return {
            name,
            content: tab.props.children,
          }
        })
    }, [
      children,
      emptyList,
      handleChange,
      inputSearchPlaceholder,
      state.visible,
      tabState.selectedId,
      value,
    ])
    const hasTabs = tabs.length > 1
    const onlyTabContent = tabs[0].content

    return (
      <S.Popover aria-label={popoverAriaLabel} ref={ref} state={state}>
        {hasTabs && (
          <>
            <S.TabList aria-label={tabListAriaLabel} state={tabState}>
              {tabs.map(tab => (
                <Tab id={tab.name} key={tab.name} state={tabState}>
                  {tab.name}
                </Tab>
              ))}
            </S.TabList>
            {tabs.map(tab => (
              <Tab.Panel key={tab.name} state={tabState} tabId={tab.name}>
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

EmojiPickerComponent.displayName = 'EmojiPicker'

export function useEmojiPicker(options?: UsePopoverStateOptions): UsePopoverStateReturn {
  return usePopoverState({
    placement: 'bottom-start',
    ...options,
  })
}

export const EmojiPicker = Object.assign(EmojiPickerComponent, {
  Trigger: Popover.Trigger,
  Tab: EmojiTab,
  List: List,
  BasicList: BasicList,
})
