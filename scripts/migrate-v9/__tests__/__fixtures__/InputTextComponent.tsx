import { InputText } from 'welcome-ui/InputText'

const register = (name: string, options?: object) => {
  return { name, ...options }
}

export const InputTextComponent = () => {
  return (
    <form>
      <InputText
        autoFocus
        dataTestId="wa-forgot-input-email"
        name="email"
        {...register('email', {
          pattern: 'This field has invalid format',
          required: 'This field is required',
          value: /fish/,
        })}
      />
    </form>
  )
}
