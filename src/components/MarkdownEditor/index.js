import React, { useCallback, useEffect, useState } from 'react'
import { arrayOf, bool, func, node, oneOfType, string } from 'prop-types'

// Only require CSS on client
if (window) {
  require('emoji-mart/css/emoji-mart.css')
  require('easymde/dist/easymde.min.css')
}

import { formFieldPropTypes } from '../../utils/propTypes'
import { createEvent } from '../../utils/events'
import { Icon } from '../Icon'

import { Toolbar, toolbarItemPropTypes } from './Toolbar'
import { EmojiPicker } from './EmojiPicker'
import * as S from './styles'

const DEFAULT_TOOLBAR = [
  { name: 'bold' },
  { name: 'italic' },
  { name: 'strikethrough' },
  { name: 'link' },
  { name: 'divider' },
  { name: 'heading-1' },
  { name: 'heading-2' },
  { name: 'divider' },
  { name: 'unordered-list' },
  { name: 'ordered-list' },
  { name: 'divider' },
  { name: 'code' },
  { name: 'quote' },
  { name: 'horizontal-rule' },
  { name: 'divider' },
  { name: 'emoji' }
]

export const MarkdownEditor = ({
  autoFocus,
  disabled,
  inputRef,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  toolbar = DEFAULT_TOOLBAR,
  value,
  variant
}) => {
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
    if (showEmojiPicker) {
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
    'heading-1': 'toggleHeading1',
    'heading-2': 'toggleHeading2',
    code: 'toggleCodeBlock',
    quote: 'toggleBlockquote',
    'unordered-list': 'toggleUnorderedList',
    'ordered-list': 'toggleOrderedList',
    'horizontal-rule': 'drawHorizontalRule'
  }

  useEffect(() => {
    // Set toolbar items on mount
    setToolbarItems(
      toolbar.map(item => ({
        name: item.name,
        icon: item.icon || <Icon name="comment" size="sm" />,
        action: item.action || DEFAULT_TOOLBAR_ACTIONS[item.name] || null
      }))
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleFocus = () => {
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
    if (action) {
      if (typeof action === 'string') {
        action = instance[action] // Use actions from the MDE instance
      }
      action()
    }
    updateCurrentTools(instance.codemirror)
  }

  // Taken from https://github.com/sparksuite/simplemde-markdown-editor/blob/6abda7ab68cc20f4aca870eb243747951b90ab04/src/js/simplemde.js#L140
  const updateCurrentTools = cm => {
    const pos = cm.getCursor('start')
    const token = cm.getTokenAt(pos)
    const line = cm.getLine(pos.line)

    const CODE_MIRROR_TYPES = {
      strong: 'bold',
      atom: 'quote',
      em: 'italic',
      quote: 'quote',
      strikethrough: 'strikethrough',
      'variable-2': /^\s*\d+\.\s/.test(line) ? 'ordered-list' : 'unordered-list',
      comment: 'code',
      link: 'link',
      tag: 'image',
      'header-1': 'heading-1',
      'header-2': 'heading-2'
    }

    let current = []
    if (token.type) {
      current = token.type
        .split(' ')
        .map(type => CODE_MIRROR_TYPES[type])
        .filter(type => type)
    }

    setCurrentTools(current)
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
    <S.Wrapper disabled={disabled} focused={focused} variant={variant}>
      <Toolbar active={currentTools} items={toolbarItems} onClick={handleToolbarClick} />
      {showEmojiPicker && <EmojiPicker onSelect={addEmoji} />}
      <S.Editor
        events={{ blur: handleBlur, focus: handleFocus, cursorActivity: updateCurrentTools }}
        extraKeys={{ Tab: false }}
        getMdeInstance={setInstance}
        onChange={handleChange}
        options={{
          autofocus: autoFocus,
          placeholder,
          toolbar: false,
          tabSize: 4,
          spellChecker: false,
          status: false
        }}
        ref={inputRef}
        value={value}
      />
    </S.Wrapper>
  )
}

MarkdownEditor.propTypes = {
  ...formFieldPropTypes,
  autoFocus: func,
  disabled: bool,
  placeholder: oneOfType([string, node]),
  toolbar: arrayOf(toolbarItemPropTypes)
}
