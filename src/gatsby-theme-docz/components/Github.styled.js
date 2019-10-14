import styled from '@xstyled/styled-components'

export const Github = styled.a`
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: dark.500;
  border: none;
  padding: xl;
  color: white;
  box-sizing: border-box;
  justify-content: space-between;
  text-decoration: none;
  transition: medium;
  width: inherit;

  &:hover,
  &:focus {
    color: dark.500;
    background-color: nude.300;
  }
`
