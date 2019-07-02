import React from 'react'
import { arrayOf, bool, func, node, oneOf, shape, string } from 'prop-types'
import Downshift from 'downshift'

import { Icon } from '../Icon'
import { createEvent } from '../../utils/'

import * as S from './styles'

const itemToString = item => (item ? item.label : '')

export const Select = ({
  autoFocus,
  disabled,
  inputRef,
  options = [],
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder = 'Please select',
  searchable = false,
  size = 'lg',
  value,
  variant
}) => {
  const handleChange = ({ value }) => {
    const event = createEvent({ name, value })
    onChange && onChange(event)
  }

  const getItem = value => options.find(item => item.value === value)

  return (
    <Downshift
      initialSelectedItem={getItem(value)}
      itemToString={itemToString}
      onChange={handleChange}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        getRootProps,
        getToggleButtonProps,
        highlightedIndex,
        isOpen,
        selectedItem,
        toggleMenu
      }) => (
        <S.Wrapper {...getRootProps()}>
          <S.Input
            {...getInputProps({
              onBlur,
              onFocus,
              autoFocus,
              disabled,
              name,
              onClick: toggleMenu,
              placeholder: placeholder,
              readOnly: true,
              ref: inputRef,
              searchable: searchable,
              size: size,
              value: selectedItem && selectedItem.label,
              variant
            })}
          />
          <S.DropDownIndicator disabled={disabled} isOpen={isOpen} {...getToggleButtonProps()}>
            <Icon name="down" size="xs" />
          </S.DropDownIndicator>
          {isOpen ? (
            <S.Menu {...getMenuProps()}>
              {options.map((item, index) => (
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
            </S.Menu>
          ) : null}
        </S.Wrapper>
      )}
    </Downshift>
  )
}

Select.propTypes = {
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
  searchable: bool,
  size: oneOf(['sm', 'md', 'lg']),
  value: string,
  variant: oneOf(['error', 'info', 'valid', 'warning'])
}
