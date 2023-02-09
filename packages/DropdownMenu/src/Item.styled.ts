import styled, { system, th } from '@xstyled/styled-components'

export const Item = styled.button`
  ${th('dropdownMenu.item')};
  display: flex;
  align-items: center;
  width: 100%;
  border: 0;
  appearance: none;
  cursor: pointer;
  transition: medium;
  text-decoration: none;
  padding: md;

  &[type='button'] {
    appearance: none;
  }

  &:hover,
  &:focus {
    outline: none !important; /* important for firefox */
  }

  ${system}
`
