/* eslint-disable no-fallthrough */
import React, { useState } from 'react'
import { arrayOf, bool, func, node, oneOf, shape, string } from 'prop-types'
import Downshift from 'downshift'
import matchSorter from 'match-sorter'

import { Tag } from '../Tag'
import { createEvent } from '../../utils/'

import * as S from './styles'

const itemToString = item => (item ? item.label : '')

// ONBLUR: SetMatches to options
// Add 'Create new tag (inputValue)' and remove onKeyDown stuff. Have to click/select 'Create new tag' item. :)

export const InputTags = ({
  autoFocus,
  disabled,
  inputRef,
  options = [],
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder = 'Search or add a tag',
  tags: initialTags = [],
  variant
}) => {
  const [tags, setTags] = useState(initialTags)
  const [inputValue, setInputValue] = useState('')
  const [matches, setMatches] = useState(options)

  console.debug('matches', matches)

  const handleChange = value => {
    const event = createEvent({ name, value })
    console.debug('handleChange', event)
    onChange && onChange(event)
  }

  const handleStateChange = console.debug

  const addTag = tag => {
    console.debug('addTag', tag)
    const newTags = [...tags, tag]
    setTags(newTags)
    setInputValue('')
    handleChange(newTags)
  }

  const removeTag = value => {
    const newTags = tags.filter(tag => tag.value !== value)
    console.debug('removeTag', value, newTags)
    setTags(newTags)
    handleChange(newTags)
  }

  const handleInputChange = value => {
    console.debug('handleInputChange', value)
  }

  const handleKeyDown = ({ key, keyCode, preventDefault, stopPropagation }) => {
    const currentValue = `${inputValue}${key}`
    console.debug('handleKeyDown', key)
    let results = []
    switch (keyCode) {
      case 8: // Backspace
      case 13: // Enter
      case 16: // Shift
      case 17: // Ctrl
      case 18: // Alt
      case 19: // Pause/Break
      case 20: // Caps Lock
      case 27: // Escape
      case 35: // End
      case 36: // Home
      case 37: // Left
      case 38: // Up
      case 39: // Right
      case 40: // Down
      case 46: // Del
      // Mac CMD Key
      case 91: // Safari, Chrome
      case 93: // Safari, Chrome
      case 224: // Firefox
        break
      case 9: // Tab
      case 188: // Comma
        preventDefault()
        stopPropagation()
        addTag(currentValue)
        break
      default:
        results = matchSorter(options, currentValue, { keys: ['label'] })
        console.debug('handleKeyDown', currentValue, results)
        setMatches(results)
        setInputValue(currentValue)
    }
  }

  return (
    <Downshift itemToString={itemToString} onSelect={addTag} onStateChange={handleStateChange}>
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        getRootProps,
        highlightedIndex,
        isOpen,
        selectedItem,
        toggleMenu
      }) => {
        return (
          <S.Wrapper {...getRootProps()}>
            <S.Input
              {...getInputProps({
                autoFocus,
                disabled,
                name,
                onClick: toggleMenu,
                placeholder,
                value: inputValue,
                ref: inputRef,
                onChange: handleInputChange
                // onKeyDown: handleKeyDown
              })}
            />
            {isOpen ? (
              <S.Menu {...getMenuProps()}>
                {matches.map((item, index) => (
                  <S.Item
                    key={item.value}
                    {...getItemProps({
                      index,
                      isHighlighted: highlightedIndex === index,
                      isSelected: selectedItem === item,
                      item
                    })}
                  >
                    {item.label}
                  </S.Item>
                ))}
                <S.Item
                  key="add"
                  {...getItemProps({
                    index: matches.length,
                    isHighlighted: highlightedIndex === matches.length,
                    item: {
                      value: '_add',
                      label: 'Create new tag'
                    }
                  })}
                >
                  Create new tag
                </S.Item>
              </S.Menu>
            ) : null}
            <S.Tags>
              {tags.map(tag => (
                <Tag data-id={tag.value} key={tag.value} onRemove={removeTag}>
                  {tag.label}
                </Tag>
              ))}
            </S.Tags>
          </S.Wrapper>
        )
      }}
    </Downshift>
  )
}

InputTags.propTypes = {
  autoFocus: bool,
  disabled: bool,
  inputRef: node,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  onKeyDown: func,
  options: arrayOf(
    shape({
      label: string,
      value: string
    })
  ),
  placeholder: string,
  tags: arrayOf(string),
  variant: oneOf(['error', 'info', 'valid', 'warning'])
}
