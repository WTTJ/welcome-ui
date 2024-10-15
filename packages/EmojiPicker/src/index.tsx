import React, { Children, cloneElement, useCallback, useMemo } from 'react'
import { Tab, useTab } from '@welcome-ui/tabs'
import {
  Popover,
  UsePopover,
  usePopover,
  UsePopoverProps,
  UsePopoverState,
} from '@welcome-ui/popover'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import * as Ariakit from '@ariakit/react'

import * as S from './styles'
import { List } from './List'
import { Panel } from './Panel'
import { BasicList } from './BasicList'
import { EmojiTab, EmojiTabProps } from './Tab'

export interface EmojiPickerOptions {
  defaultTabStore?: Ariakit.TabStoreProps
  emptyList?: string
  inputSearchPlaceholder?: string
  onChange?: (value: string) => void
  popoverAriaLabel?: string
  store: UseEmojiPicker
  tabListAriaLabel?: string
  value: string | null
}

export type EmojiPickerProps = CreateWuiProps<'div', EmojiPickerOptions>

const EmojiPickerComponent = forwardRef<'div', EmojiPickerProps>(
  (
    {
      children,
      defaultTabStore = {},
      emptyList = 'No emojis found for your query 😔',
      inputSearchPlaceholder = 'Search an emoji',
      onChange,
      popoverAriaLabel = 'Emoji picker',
      store,
      tabListAriaLabel = 'Emoji picker tabs',
      value,
    },
    ref
  ) => {
    const tab = useTab(defaultTabStore)

    const hidePopover = useMemo(() => store.hide, [store.hide])
    const isOpen = store.useState('open')
    const tabSelectedId = tab.useState('selectedId')

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
              <BasicList isOpen={isOpen} onChange={handleChange} value={value} />
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
                isVisible: isOpen && (!tabSelectedId || tabSelectedId === tab.props.name),
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
    }, [children, emptyList, handleChange, inputSearchPlaceholder, isOpen, tabSelectedId, value])
    const hasTabs = tabs.length > 1
    const onlyTabContent = tabs[0].content

    return (
      <S.Popover aria-label={popoverAriaLabel} ref={ref} store={store}>
        {hasTabs && (
          <>
            <S.TabList aria-label={tabListAriaLabel} store={tab}>
              {tabs.map(item => (
                <Tab id={item.name} key={item.name} store={tab}>
                  {item.name}
                </Tab>
              ))}
            </S.TabList>
            {tabs.map(item => (
              <Tab.Panel key={item.name} store={tab} tabId={item.name}>
                <Panel>{item.content}</Panel>
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

export type UseEmojiPicker = UsePopover
export type UseEmojiPickerProps = UsePopoverProps
export type UseEmojiPickerState = UsePopoverState

export function useEmojiPicker(options?: UseEmojiPickerProps): UseEmojiPicker {
  return usePopover({
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
