import React, { useState } from 'react'
import { func, node, arrayOf, oneOfType, string, object, bool } from 'prop-types'
import { throttle } from 'lodash'
import 'easymde/dist/easymde.min.css'

import { StyledMarkdownEditor, StyledSimpleMDE } from './styles'
import { formFieldPropTypes } from '../../utils/propTypes'

export const MarkdownEditor = props => {
  const {
    autoFocus,
    showIcons = [],
    hideIcons = [],
    toolbar,
    placeholder,
    variant,
    disabled,
    value,
    onBlur,
    onFocus,
    onChange
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

  const handleChange = throttle(() => {
    onChange && onChange(value)
  }, 200)

  // getInstance = instance => {
  //   this.simpleMdeInstance = instance
  // }

  return (
    <StyledMarkdownEditor disabled={disabled} focused={focused} variant={variant}>
      <StyledSimpleMDE
        // getMdeInstance={this.getInstance}
        onChange={handleChange}
        className="simple-md-editor-wrapper"
        options={{
          autofocus: autoFocus,
          placeholder,
          toolbar,
          tabSize: 4,
          spellChecker: false,
          showIcons,
          hideIcons: [...hideIcons, 'image', 'heading', 'fullscreen', 'side-by-side']
        }}
        extraKeys={{
          Tab: false // Prevent tab from indenting (and creating code block)
        }}
        events={{ blur: handleBlur, focus: handleFocus }}
      />
    </StyledMarkdownEditor>
  )
}

MarkdownEditor.propTypes = {
  ...formFieldPropTypes,
  autoFocus: func,
  showIcons: arrayOf(string),
  hideIcons: arrayOf(string),
  toolbar: arrayOf(string),
  placeholder: oneOfType([string, node]),
  error: object,
  warning: object,
  disabled: bool
}
