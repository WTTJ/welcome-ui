import styled from '@xstyled/styled-components'
import { filterFieldComponent } from '@welcome-ui/system'

const FILE_UPLOAD_PROPS = ['onAddFile', 'onRemoveFile']

export const Input = styled(filterFieldComponent('input', FILE_UPLOAD_PROPS))`
  display: none;
`
