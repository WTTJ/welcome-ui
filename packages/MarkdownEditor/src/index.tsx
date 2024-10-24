import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  BoldIcon,
  CodeIcon,
  Heading1Icon,
  Heading2Icon,
  ItalicIcon,
  LinkIcon,
  OrderedListIcon,
  QuoteIcon,
  StrikethroughIcon,
  UnorderedListIcon,
} from '@welcome-ui/icons'
import { createEvent, CreateEvent, DefaultFieldStylesProps } from '@welcome-ui/utils'
import { SimpleMdeReact, SimpleMDEReactProps } from 'react-simplemde-editor'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { BaseEmoji } from 'emoji-mart'

import { Toolbar } from './Toolbar'
import { EmojiPicker } from './EmojiPicker'
import * as S from './styles'
import { CurrentToolsFromEditor, getCurrentToolsFromEditor } from './utils'
import { Action, DEFAULT_TOOLBAR, DefaultToolbar } from './constants'

interface Icons {
  [key: string]: React.ReactElement | string
}
interface Actions {
  [key: string]: Action
}
export interface MarkdownEditorOptions extends DefaultFieldStylesProps {
  actions?: React.ReactElement
  autoFocus?: SimpleMDEReactProps['options']['autofocus']
  disabled?: boolean
  minHeight?: SimpleMDEReactProps['options']['minHeight']
  name: string
  onBlur?: (value: string | null) => void
  onChange?: (event: React.MouseEvent<HTMLDivElement> | CreateEvent) => void
  onFocus?: (value: string | null) => void
  placeholder: SimpleMDEReactProps['options']['placeholder']
  toolbar?: DefaultToolbar
  value?: string
}

export type MarkdownEditorProps = CreateWuiProps<
  'div',
  MarkdownEditorOptions & Omit<SimpleMDEReactProps, keyof MarkdownEditorOptions>
>

const ICONS: Icons = {
  bold: <BoldIcon />,
  emoji: '😃',
  italic: <ItalicIcon />,
  strikethrough: <StrikethroughIcon />,
  link: <LinkIcon />,
  heading_1: <Heading1Icon />,
  heading_2: <Heading2Icon />,
  code: <CodeIcon />,
  quote: <QuoteIcon />,
  unordered_list: <UnorderedListIcon />,
  ordered_list: <OrderedListIcon />,
}

export const MarkdownEditor = forwardRef<'div', MarkdownEditorProps>(
  (
    {
      actions,
      autoFocus,
      dataTestId,
      disabled,
      minHeight = '8rem',
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      toolbar = DEFAULT_TOOLBAR,
      value,
      variant,
      ...rest
    },
    ref
  ) => {
    const [focused, setFocused] = useState(autoFocus || false)
    const [instance, setInstance] = useState(null)
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const [currentTools, setCurrentTools] = useState([])
    const [toolbarItems, setToolbarItems] = useState([])
    const actionsRef = useRef<HTMLDivElement>(null)

    const options = useMemo(
      () => ({
        autoDownloadFontAwesome: false,
        autofocus: autoFocus,
        placeholder,
        toolbar: false,
        tabSize: 4,
        spellChecker: false,
        status: false,
        minHeight,
      }),
      [autoFocus, minHeight, placeholder]
    )

    /* EMOJI PICKER */
    const toggleEmojiPicker = () => {
      setShowEmojiPicker(!showEmojiPicker)
    }

    /* TOOLBAR */
    const DEFAULT_TOOLBAR_ACTIONS: Actions = {
      bold: 'toggleBold',
      emoji: toggleEmojiPicker,
      italic: 'toggleItalic',
      strikethrough: 'toggleStrikethrough',
      link: 'drawLink',
      heading_1: 'toggleHeading1',
      heading_2: 'toggleHeading2',
      code: 'toggleCodeBlock',
      quote: 'toggleBlockquote',
      unordered_list: 'toggleUnorderedList',
      ordered_list: 'toggleOrderedList',
      horizontal_rule: 'drawHorizontalRule',
    }

    const handleFocus = () => {
      instance?.codemirror?.focus()
      onFocus?.(value)
      setFocused(true)
      setShowEmojiPicker(false)
    }

    const handleBlur = () => {
      onBlur && onBlur(value)
      setFocused(false)
    }

    const handleChange = (value: string) => {
      const event = createEvent({ name, value })
      onChange && onChange(event)
      updateCurrentTools(instance?.codemirror)
    }

    const handleToolbarClick = (item: string) => {
      const { action } = toolbarItems.find(toolbarItem => toolbarItem.name === item)
      // catch errors of mde actions (bad regex on their side)
      try {
        // Use actions from the MDE instance or provided action
        action && typeof action === 'string' ? instance[action]() : action()
        handleChange(instance?.codemirror?.getValue())
      } catch (e) {
        return
      }
      updateCurrentTools(instance?.codemirror)
    }

    const updateCurrentTools = (cm: CurrentToolsFromEditor) => {
      setCurrentTools(getCurrentToolsFromEditor(cm))
    }

    const events = {
      blur: handleBlur,
      focus: handleFocus,
      cursorActivity: updateCurrentTools,
    }

    const addEmoji = (emoji: BaseEmoji) => {
      const cm = instance.codemirror
      const doc = cm.getDoc()
      const position = doc.getCursor()
      doc.replaceRange(emoji.native, position)

      const nextValue = instance.value()
      handleChange(nextValue)

      // Close picker and position cursor after our emoji
      toggleEmojiPicker()
      cm.focus()
      setTimeout(() => doc.setCursor({ line: position.line, ch: position.ch + 2 }), 50)
    }

    useEffect(() => {
      // Add emoji to currentTools if we're showing emoji picker
      if (showEmojiPicker && !currentTools.includes('emoji')) {
        setCurrentTools([...currentTools, 'emoji'])
      }
    }, [currentTools, showEmojiPicker])

    useEffect(() => {
      // Set toolbar items on mount
      setToolbarItems(
        toolbar.map(({ action, icon, name, title }) => ({
          name: name,
          title: title || name,
          icon: icon || ICONS[name],
          action: action || DEFAULT_TOOLBAR_ACTIONS[name] || null,
        }))
      )
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <S.Wrapper
        data-testid={dataTestId}
        disabled={disabled}
        focused={focused}
        variant={variant}
        {...rest}
      >
        <Toolbar
          active={currentTools}
          items={toolbarItems}
          onClick={handleToolbarClick}
          role="toolbar"
        />
        {showEmojiPicker && <EmojiPicker onSelect={addEmoji} />}
        <SimpleMdeReact
          events={events}
          extraKeys={{ Tab: false }}
          getMdeInstance={setInstance}
          onChange={handleChange}
          onFocus={handleFocus}
          options={options}
          ref={ref as unknown as React.Ref<HTMLDivElement>}
          style={{ paddingBottom: actionsRef?.current?.offsetHeight }}
          value={value}
        />
        {actions && <S.Actions ref={actionsRef}>{actions}</S.Actions>}
      </S.Wrapper>
    )
  }
)

MarkdownEditor.displayName = 'MarkdownEditor'
