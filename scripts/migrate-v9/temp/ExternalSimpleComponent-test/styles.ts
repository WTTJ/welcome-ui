import styled from '@xstyled/styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: lg;
`

export const Header = styled.h1`
  color: primary-500;
  margin-bottom: md;
`

export const Content = styled.section`
  flex: 1;
`

export const Button = styled.button`
  background-color: primary-500;
  color: white;
  padding: sm md;
  border: none;
  border-radius: sm;
  cursor: pointer;
`
