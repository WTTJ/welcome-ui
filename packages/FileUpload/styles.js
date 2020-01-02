import styled from '@xstyled/styled-components'
import { filterFieldComponent } from '@welcome-ui/system'

const FILTER_PROPS = ['onAddFile', 'onRemoveFile']

export const Input = styled(filterFieldComponent('input', FILTER_PROPS))`
  display: none;
`
