import styled, { th } from '@xstyled/styled-components'

export const Item = styled.buttonBox`
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

  &:focus {
    outline: none !important; /* important for firefox */
  }
`
