import React from 'react'
import { arrayOf, bool, func, node, oneOf, shape, string } from 'prop-types'
import Downshift from 'downshift'

import { Icon } from '../Icon'
import { createEvent } from '../../utils/'

import * as S from './styles'

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
      itemToString={item => (item ? item.label : '')}
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
            autoFocus={autoFocus}
            disabled={disabled}
            name={name}
            onClick={toggleMenu}
            placeholder={placeholder}
            readOnly
            ref={inputRef}
            value={selectedItem && selectedItem.label}
            variant={variant}
            {...getInputProps({ onBlur, onFocus })}
          />
          <S.DropDownIndicator disabled={disabled} isOpen={isOpen} {...getToggleButtonProps()}>
            <Icon name="down" size="xs" />
          </S.DropDownIndicator>
          {isOpen ? (
            <S.Menu {...getMenuProps()}>
              {options.map((item, index) => (
                // eslint-disable-next-line react/jsx-key
                <S.Items
                  highlighted={highlightedIndex === index}
                  selected={selectedItem === item}
                  {...getItemProps({
                    key: item.value,
                    index,
                    item
                  })}
                >
                  {item.label}
                </S.Items>
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
  value: string,
  variant: oneOf(['error', 'info', 'valid', 'warning'])
}
