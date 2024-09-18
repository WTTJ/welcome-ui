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
import {
  SimpleMdeReact,
  SimpleMDEReactProps,
  type SimpleMdeToCodemirrorEvents,
} from 'react-simplemde-editor'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import type { Emoji as BaseEmoji } from 'emoji-mart'
import type { Editor, EditorChangeCancellable } from 'codemirror'

import { Toolbar } from './Toolbar'
import * as S from './styles'
import { CurrentToolsFromEditor, type ExtractProps, getCurrentToolsFromEditor } from './utils'
import { Action, DEFAULT_TOOLBAR, DefaultToolbar } from './constants'
import EmojiPicker from './EmojiPicker'

type EmojiProps = ExtractProps<typeof BaseEmoji.Props>

interface Icons {
  [key: string]: React.ReactElement | string
}
interface Actions {
  [key: string]: Action
}
export type Variant = 'error' | 'info' | 'success' | 'valid' | 'warning'
export interface MarkdownEditorOptions extends DefaultFieldStylesProps {
  actions?: React.ReactElement
  autoFocus?: SimpleMDEReactProps['options']['autofocus']
  disabled?: boolean
  maxLength?: number
  minHeight?: SimpleMDEReactProps['options']['minHeight']
  name: string
  onBlur?: (event: CreateEvent) => void
  onChange?: (event: CreateEvent) => void
  onFocus?: (event: CreateEvent) => void
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
      maxLength,
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
        minHeight,
        placeholder,
        spellChecker: false,
        status: false,
        tabSize: 4,
        toolbar: false,
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

      const event = createEvent({ name, value })
      onFocus?.(event)

      setFocused(true)
      setShowEmojiPicker(false)
    }

    const handleBlur = () => {
      const event = createEvent({ name, value })

      onBlur?.(event)
      setFocused(false)
    }

    const handleChange = (value: string) => {
      const event = createEvent({ name, value })

      onChange?.(event)
      updateCurrentTools(instance?.codemirror)
    }

    const handleBeforeChange = (instance: Editor, changes: EditorChangeCancellable) => {
      const regex = /[*_~`#]/g
      const localValue = instance.getValue().replace(regex, '')
      const length = localValue.length

      // Cancel change if typing past limit
      if (changes.origin !== '+delete' && length > maxLength) {
        changes.cancel()
      }

      // Crop change if pasting past limit
      if (changes.origin === 'paste') {
        let str = changes.text.join('\n')

        let delta =
          str.length - (instance.indexFromPos(changes.to) - instance.indexFromPos(changes.from))

        if (delta <= 0) {
          return true
        }

        delta = length + delta - maxLength

        if (delta > 0) {
          str = str.substring(0, str.length - delta)
          changes.update(changes.from, changes.to, str.split('\n'))
        }
      }
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

    const events = useMemo(() => {
      return {
        beforeChange: maxLength ? handleBeforeChange : undefined,
        blur: handleBlur,
        focus: handleFocus,
        cursorActivity: updateCurrentTools,
      } as SimpleMdeToCodemirrorEvents
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const addEmoji = (emoji: EmojiProps) => {
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
        {showEmojiPicker && Boolean(EmojiPicker) && <EmojiPicker onSelect={addEmoji} />}
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
