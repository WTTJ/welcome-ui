import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'

export const ContentWrapper = styled.section`
  flex-grow: 1;
  overflow-y: auto;
`

export const Content = styled.article`
  width: 100%;
  max-width: 1200;
  margin: 0 auto;
  padding: 20 20 50 20;
  color: nude.800;

  @media (min-width: 1300px) {
    padding: 50 100;
  }

  p {
    line-height: 1.7;

    a {
      opacity: 1;
      text-decoration: none;
      transition: opacity 300ms;

      &:hover,
      &:focus {
        opacity: 0.6;
        outline: none !important; /* important for firefox */
      }

      ${th('links.default')};
      ${th(`links.primary`)};
    }
  }

  ol,
  ul {
    line-height: 1.7;
  }
`
