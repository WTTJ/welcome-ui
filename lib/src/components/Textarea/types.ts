export interface TextareaOptions {
  minRows?: number
  variant?: 'danger' | 'default' | 'success' | 'warning'
}

export type TextareaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & TextareaOptions
