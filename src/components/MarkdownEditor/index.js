import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Only require CSS on client
if (window) {
  require('easymde/dist/easymde.min.css')
}

import { formFieldPropTypes } from '../../utils/propTypes'
import { createEvent } from '../../utils/events'
import { Icon } from '../Icon'

import * as S from './styles'

const ACTIONS = {
  divider: null,
  emoji: null,
  bold: 'toggleBold',
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

const getTooltip = item =>
  `${item.charAt(0).toUpperCase()}${item.substr(1).toLowerCase()}`.replace('-', ' ')

export const MarkdownEditor = props => {
  const {
    autoFocus,
    disabled,
    inputRef,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    value,
    variant
  } = props

  const [focused, setFocused] = useState(autoFocus || false)
  const [instance, setInstance] = useState(null)

  const handleFocus = () => {
    onFocus && onFocus(value)
    setFocused(true)
  }

  const handleBlur = () => {
    onBlur && onBlur(value)
    setFocused(false)
  }

  const handleChange = value => {
    const event = createEvent({ name, value })
    onChange && onChange(event)
  }

  const handleToolbarClick = e => {
    const item = e.currentTarget.dataset.id
    const action = ACTIONS[item]
    if (action) {
      if (typeof action === 'string') {
        // `instance` is the EasyMDE instance hence we can use it's actions
        instance[action]()
      } else {
        action()
      }
    }
  }

  const actions = [
    'bold',
    'italic',
    'strikethrough',
    'link',
    'divider',
    'heading-1',
    'heading-2',
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

  return (
    <S.Wrapper disabled={disabled} focused={focused} variant={variant}>
      <S.Toolbar>
        {actions.map((action, i) => {
          if (action === 'divider') {
            return <S.Divider />
          }
          return (
            <S.ToolbarIcon
              data-id={action}
              key={`${action}-${i}`}
              onClick={handleToolbarClick}
              title={getTooltip(action)}
            >
              <Icon name="comment" />
            </S.ToolbarIcon>
          )
        })}
      </S.Toolbar>
      <S.Editor
        className="simple-md-editor-wrapper"
        events={{ blur: handleBlur, focus: handleFocus }}
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
          spellChecker: false
        }}
        ref={inputRef}
        value={value}
      />
    </S.Wrapper>
  )
}

MarkdownEditor.propTypes = {
  ...formFieldPropTypes,
  autoFocus: PropTypes.func,
  disabled: PropTypes.bool,
  hideIcons: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  showIcons: PropTypes.arrayOf(PropTypes.string),
  toolbar: PropTypes.arrayOf(PropTypes.string)
}
