export interface TextareaOptions {
  minRows?: number
  variant?: Variant
}

export type TextareaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & TextareaOptions

export type Variant = 'danger' | 'default' | 'success' | 'warning'
