import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Only require CSS on client
if (window) {
  require('easymde/dist/easymde.min.css')
}

import { formFieldPropTypes } from '../../utils/propTypes'
import { createEvent } from '../../utils/events'

import * as S from './styles'

export const MarkdownEditor = props => {
  const {
    autoFocus,
    disabled,
    hideIcons = [],
    inputRef,
    name,
    onBlur,
    onFocus,
    onChange,
    placeholder,
    showIcons = [],
    toolbar,
    value,
    variant
  } = props

  const [focused, setFocused] = useState(autoFocus || false)

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

  return (
    <S.Wrapper disabled={disabled} focused={focused} variant={variant}>
      <S.Editor
        className="simple-md-editor-wrapper"
        events={{ blur: handleBlur, focus: handleFocus }}
        extraKeys={{
          Tab: false // Prevent tab from indenting (and creating code block)
        }}
        onChange={handleChange}
        options={{
          autofocus: autoFocus,
          placeholder,
          toolbar,
          tabSize: 4,
          spellChecker: false,
          showIcons,
          hideIcons: [...hideIcons, 'image', 'heading', 'fullscreen', 'side-by-side']
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
