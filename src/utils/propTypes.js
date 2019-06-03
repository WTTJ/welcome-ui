import PropTypes from 'prop-types'

export const reduxFormFieldPropTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    warnings: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    submitFailed: PropTypes.bool.isRequired,
    touched: PropTypes.bool.isRequired
  })
}

export const formFieldPropTypes = {
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  required: PropTypes.bool,
  autoFocus: PropTypes.bool
}

export const formFieldDefaultProps = {
  classList: [],
  inlineHint: null,
  label: null,
  placeholder: null,
  required: false,
  autoFocus: false
}
