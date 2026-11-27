/**
 * Axe violations known when the check was introduced, keyed by test file then rule id.
 * `fixture`: the test renders markup no real usage would (unlabelled input, bare img…).
 * `component`: the component itself is likely at fault — to triage and fix.
 * Remove an entry once fixed; never add one to make a new violation pass.
 */
type Origin = 'component' | 'fixture'

export const a11yBaseline: Record<string, Record<string, Origin>> = {
  'components/Accordion/index.test.tsx': {
    'button-name': 'component',
    'nested-interactive': 'component',
  },
  'components/Avatar/tests/index.test.tsx': {
    'role-img-alt': 'component',
  },
  'components/Button/index.test.tsx': {
    'aria-command-name': 'fixture',
    'button-name': 'fixture',
  },
  'components/Checkbox/tests/index.test.tsx': {
    'aria-allowed-attr': 'component',
    label: 'fixture',
  },
  'components/DateTimePicker/tests/index.test.tsx': {
    'aria-allowed-attr': 'component',
    'aria-input-field-name': 'component',
    label: 'fixture',
  },
  'components/DropdownMenu/tests/index.test.tsx': {
    'aria-required-children': 'component',
    'button-name': 'fixture',
  },
  'components/InputText/tests/index.test.tsx': {
    label: 'fixture',
  },
  'components/PasswordInput/tests/index.test.tsx': {
    'aria-valid-attr-value': 'component',
    label: 'fixture',
  },
  'components/RadioGroup/tests/index.test.tsx': {
    'aria-allowed-role': 'component',
    'nested-interactive': 'component',
  },
  'components/Search/index.test.tsx': {
    'aria-required-attr': 'component',
    'aria-required-children': 'component',
    'aria-valid-attr-value': 'component',
    'image-alt': 'fixture',
  },
  'components/Select/tests/index.test.tsx': {
    'aria-allowed-attr': 'component',
    'aria-input-field-name': 'component',
    'aria-required-attr': 'component',
    'aria-required-children': 'component',
    'aria-valid-attr-value': 'component',
  },
  'components/Slider/tests/index.test.tsx': {
    label: 'component',
  },
  'components/Stepper/index.test.tsx': {
    list: 'component',
    listitem: 'component',
  },
  'components/Swiper/index.test.tsx': {
    list: 'component',
  },
  'components/Tabs/tests/index.test.tsx': {
    'aria-required-children': 'component',
    'aria-required-parent': 'component',
    listitem: 'component',
  },
  'components/Textarea/tests/index.test.tsx': {
    label: 'fixture',
  },
  'components/Toggle/index.test.tsx': {
    label: 'fixture',
  },
  'components/Window/index.test.tsx': {
    'landmark-banner-is-top-level': 'component',
  },
}
