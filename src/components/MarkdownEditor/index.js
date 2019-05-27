import React, { useState } from 'react'
import { arrayOf, bool, func, node, oneOfType, string } from 'prop-types'
import 'easymde/dist/easymde.min.css'

import { formFieldPropTypes } from '../../utils/propTypes'

import { StyledMarkdownEditor, StyledSimpleMDE } from './styles'

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
    onFocus && onFocus()
    setFocused(true)
  }

  const handleBlur = () => {
    onBlur && onBlur()
    setFocused(false)
  }

  const handleChange = () => {
    // Create dummy event as expected by onChange (Final Form et al)
    onChange && onChange({ target: { name, value }, preventDefault: () => {} })
  }

  return (
    <StyledMarkdownEditor disabled={disabled} focused={focused} variant={variant}>
      <StyledSimpleMDE
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
      />
    </StyledMarkdownEditor>
  )
}

MarkdownEditor.propTypes = {
  ...formFieldPropTypes,
  autoFocus: func,
  disabled: bool,
  hideIcons: arrayOf(string),
  placeholder: oneOfType([string, node]),
  showIcons: arrayOf(string),
  toolbar: arrayOf(string)
}
