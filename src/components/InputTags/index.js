import React, { useState } from 'react'
import { arrayOf, bool, func, node, oneOf, shape, string } from 'prop-types'
import Downshift from 'downshift'
import matchSorter from 'match-sorter'
import kebabCase from 'lodash.kebabcase'
import uniqBy from 'lodash.uniqby'

import { Tag } from '../Tag'
import { createEvent } from '../../utils/'
import * as S from '../Select/styles'

const itemToString = item => (item ? item.label : '')

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
  size = 'lg',
  value,
  variant
}) => {
  const [tags, setTags] = useState(value)
  const [inputValue, setInputValue] = useState('')
  const [results, setResults] = useState(options)

  const handleInputChange = value => {
    const results = matchSorter(options, value, { keys: ['label'] })
    setInputValue(value)
    setResults(results)
  }

  const handleChange = tags => {
    const event = createEvent({ name, value: tags })
    onChange && onChange(event)
  }

  const handleSelect = tag => {
    const newTags = uniqBy([...tags, tag], tag => tag.value)
    setInputValue('')
    setResults(options)
    setTags(newTags)
    handleChange(newTags)
  }

  const handleRemove = value => {
    const newTags = tags.filter(tag => tag.value !== value)
    setTags(newTags)
    handleChange(newTags)
  }

  const isTagExisting = value => tags.find(tag => tag.value === kebabCase(value))

  return (
    <Downshift
      itemToString={itemToString}
      onInputValueChange={handleInputChange}
      onSelect={handleSelect}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        getRootProps,
        highlightedIndex,
        isOpen,
        toggleMenu
      }) => {
        return (
          <S.Wrapper {...getRootProps()}>
            <S.Input
              {...getInputProps({
                autoComplete: 'ignore',
                autoFocus,
                disabled,
                name,
                onBlur,
                onClick: toggleMenu,
                onFocus,
                placeholder,
                ref: inputRef,
                size,
                value: inputValue,
                variant
              })}
            />
            {isOpen ? (
              <S.Menu {...getMenuProps()}>
                {results.map((item, index) => (
                  <S.Item
                    key={item.value}
                    {...getItemProps({
                      index,
                      isHighlighted: highlightedIndex === index,
                      isExisting: isTagExisting(item.value),
                      item
                    })}
                  >
                    {item.label}
                  </S.Item>
                ))}
                {inputValue && !isTagExisting(inputValue) && (
                  <S.Item
                    key="add"
                    {...getItemProps({
                      index: results.length,
                      isHighlighted: highlightedIndex === results.length,
                      item: {
                        value: kebabCase(inputValue),
                        label: inputValue
                      }
                    })}
                  >
                    {`Create new tag (${inputValue})`}
                  </S.Item>
                )}
              </S.Menu>
            ) : null}
            <S.Tags>
              {tags.map(tag => (
                <Tag data-id={tag.value} key={tag.value} onRemove={handleRemove}>
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
  size: oneOf(['sm', 'md', 'lg']),
  value: arrayOf(
    shape({
      label: string,
      value: string
    })
  ),
  variant: oneOf(['error', 'info', 'valid', 'warning'])
}
