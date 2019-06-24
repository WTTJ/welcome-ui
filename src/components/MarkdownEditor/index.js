import React, { useState } from 'react'
import { arrayOf, bool, func, node, oneOfType, string } from 'prop-types'
import { NimblePicker } from 'emoji-mart'
import data from 'emoji-mart/data/apple.json'

// Only require CSS on client
if (window) {
  require('emoji-mart/css/emoji-mart.css')
  require('easymde/dist/easymde.min.css')
}

import { formFieldPropTypes } from '../../utils/propTypes'
import { createEvent } from '../../utils/events'

import { Toolbar } from './Toolbar'
import * as S from './styles'

const TOOLBAR = [
  'bold',
  'italic',
  'strikethrough',
  'link',
  'divider',
  'header-1',
  'header-2',
  'divider',
  'unordered-list',
  'ordered-list',
  'divider',
  'code',
  'quote',
  'horizontal-rule',
  'divider',
  'emoji'
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
  toolbar = TOOLBAR,
  value,
  variant
}) => {
  const [focused, setFocused] = useState(autoFocus || false)
  const [instance, setInstance] = useState(null)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [currentTools, setCurrentTools] = useState([])

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
    updateToolbar(instance.codemirror)
  }

  const handleToolbarClick = item => {
    const action = ACTIONS[item]
    if (action) {
      if (typeof action === 'string') {
        // `instance` is the EasyMDE instance hence we can use it's actions
        instance[action]()
      } else {
        action()
      }
    }
    updateToolbar(instance.codemirror)
    if (item === 'emoji') {
      setCurrentTools(['emoji'])
    }
  }

  // Taken from https://github.com/sparksuite/simplemde-markdown-editor/blob/6abda7ab68cc20f4aca870eb243747951b90ab04/src/js/simplemde.js#L140
  const updateToolbar = cm => {
    const pos = cm.getCursor('start')
    const stat = cm.getTokenAt(pos)
    const line = cm.getLine(pos.line)

    if (!stat.type) {
      setCurrentTools([])
      return
    }

    const TYPES = {
      strong: 'bold',
      atom: 'quote',
      'variable-2': /^\s*\d+\.\s/.test(line) ? 'ordered-list' : 'unordered-list',
      em: 'italic',
      quote: 'quote',
      strikethrough: 'strikethrough',
      comment: 'code',
      link: 'link',
      tag: 'image',
      'header-1': 'header-1',
      'header-2': 'header-2'
    }

    const types = stat.type.split(' ')
    const current = types.map(type => TYPES[type]).filter(type => type)
    setCurrentTools(current)
  }

  const addEmoji = emoji => {
    const cm = instance.codemirror
    const doc = cm.getDoc()
    const position = doc.getCursor()
    doc.replaceRange(emoji.native, position)

    // Update input value
    const nextValue = instance.value()
    handleChange(nextValue)

    // Close picker
    toggleEmojiPicker()
    cm.focus()

    // Position cursor after our emoji
    setTimeout(() => doc.setCursor({ line: position.line, ch: position.ch + 2 }), 50)
  }

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker)
  }

  const ACTIONS = {
    divider: null,
    emoji: toggleEmojiPicker,
    bold: 'toggleBold',
    italic: 'toggleItalic',
    strikethrough: 'toggleStrikethrough',
    link: 'drawLink',
    'header-1': 'toggleHeading1',
    'header-2': 'toggleHeading2',
    code: 'toggleCodeBlock',
    quote: 'toggleBlockquote',
    'unordered-list': 'toggleUnorderedList',
    'ordered-list': 'toggleOrderedList',
    'horizontal-rule': 'drawHorizontalRule'
  }

  return (
    <S.Wrapper disabled={disabled} focused={focused} variant={variant}>
      <Toolbar active={currentTools} items={toolbar} onClick={handleToolbarClick} />
      {showEmojiPicker && (
        <S.EmojiPicker>
          <NimblePicker
            autoFocus
            data={data}
            emoji="ok_hand"
            onSelect={addEmoji}
            set="apple"
            title="Pick an emoji"
          />
        </S.EmojiPicker>
      )}
      <S.Editor
        className="simple-md-editor-wrapper"
        events={{ blur: handleBlur, focus: handleFocus, cursorActivity: updateToolbar }}
        extraKeys={{
          Tab: false // Prevent tab from indenting (and creating code block)
        }}
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
  toolbar: arrayOf(string)
}
