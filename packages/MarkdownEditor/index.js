import React, { forwardRef, useEffect, useState } from 'react'
import { arrayOf, bool, func, node, oneOf, oneOfType, shape, string } from 'prop-types'
import { BoldIcon } from '@welcome-ui/icons.bold'
import { ItalicIcon } from '@welcome-ui/icons.italic'
import { StrikethroughIcon } from '@welcome-ui/icons.strikethrough'
import { LinkIcon } from '@welcome-ui/icons.link'
import { Heading1Icon } from '@welcome-ui/icons.heading_1'
import { Heading2Icon } from '@welcome-ui/icons.heading_2'
import { CodeIcon } from '@welcome-ui/icons.code'
import { QuoteIcon } from '@welcome-ui/icons.quote'
import { UnorderedListIcon } from '@welcome-ui/icons.unordered_list'
import { OrderedListIcon } from '@welcome-ui/icons.ordered_list'
import { createEvent } from '@welcome-ui/utils'

import { VARIANTS_TYPE } from '../../src/utils/propTypes'

import { Toolbar } from './Toolbar'
import { EmojiPicker } from './EmojiPicker'
import * as S from './styles'
import { getCurrentToolsFromEditor } from './utils'
import { DEFAULT_TOOLBAR } from './constants'

// Only require CSS on client
if (typeof window !== 'undefined') {
  require('emoji-mart/css/emoji-mart.css')
  require('easymde/dist/easymde.min.css')
}

const ICONS = {
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
  ordered_list: <OrderedListIcon />
}

export const MarkdownEditor = forwardRef(
  (
    {
      autoFocus,
      dataTestId,
      disabled,
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      toolbar = DEFAULT_TOOLBAR,
      value,
      variant,
      minHeight = '8rem',
      ...rest
    },
    ref
  ) => {
    const [focused, setFocused] = useState(autoFocus || false)
    const [instance, setInstance] = useState(null)
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const [currentTools, setCurrentTools] = useState([])
    const [toolbarItems, setToolbarItems] = useState([])

    /* EMOJI PICKER */
    const toggleEmojiPicker = () => {
      setShowEmojiPicker(!showEmojiPicker)
    }

    useEffect(() => {
      // Add emoji to currentTools if we're showing emoji picker
      if (showEmojiPicker && !currentTools.includes('emoji')) {
        setCurrentTools([...currentTools, 'emoji'])
      }
    }, [currentTools, showEmojiPicker])

    /* TOOLBAR */
    const DEFAULT_TOOLBAR_ACTIONS = {
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
      horizontal_rule: 'drawHorizontalRule'
    }

    useEffect(() => {
      // Set toolbar items on mount
      setToolbarItems(
        toolbar.map(({ action, icon, name }) => ({
          name: name,
          icon: icon || ICONS[name],
          action: action || DEFAULT_TOOLBAR_ACTIONS[name] || null
        }))
      )
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleFocus = () => {
      instance && instance.codemirror.focus()
      onFocus && onFocus(value)
      setFocused(true)
      setShowEmojiPicker(false)
    }

    const handleBlur = () => {
      onBlur && onBlur(value)
      setFocused(false)
    }

    const handleChange = value => {
      const event = createEvent({ name, value })
      onChange && onChange(event)
      updateCurrentTools(instance.codemirror)
    }

    const handleToolbarClick = item => {
      let { action } = toolbarItems.find(toolbarItem => toolbarItem.name === item)
      // Use actions from the MDE instance or provided action
      action && typeof action === 'string' ? instance[action]() : action()
      updateCurrentTools(instance.codemirror)
    }

    const updateCurrentTools = cm => {
      setCurrentTools(getCurrentToolsFromEditor(cm))
    }

    const addEmoji = emoji => {
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
          borderRadius={rest.borderRadius}
          items={toolbarItems}
          onClick={handleToolbarClick}
          role="toolbar"
        />
        {showEmojiPicker && <EmojiPicker onSelect={addEmoji} />}
        <S.Editor
          events={{ blur: handleBlur, focus: handleFocus, cursorActivity: updateCurrentTools }}
          extraKeys={{ Tab: false }}
          getMdeInstance={setInstance}
          onChange={handleChange}
          onFocus={onFocus}
          options={{
            autoDownloadFontAwesome: false,
            autofocus: autoFocus,
            placeholder,
            toolbar: false,
            tabSize: 4,
            spellChecker: false,
            status: false,
            minHeight
          }}
          ref={ref}
          value={value}
        />
      </S.Wrapper>
    )
  }
)

MarkdownEditor.type = 'MarkdownEditor'
MarkdownEditor.displayName = 'MarkdownEditor'

MarkdownEditor.propTypes /* remove-proptypes */ = {
  autoFocus: bool,
  disabled: bool,
  minHeight: string,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  placeholder: oneOfType([string, node]),
  toolbar: arrayOf(
    shape({
      action: oneOfType([func, string]),
      icon: node,
      name: string.isRequired
    })
  ),
  value: string,
  variant: oneOf(VARIANTS_TYPE)
}
