import { Toggle } from 'welcome-ui/Toggle'

const FALSE = false

const register = (name: string, options?: object) => {
  return { name, ...options }
}

export const ToggleComponent = () => {
  return (
    <form>
      <Toggle
        checked={FALSE}
        display="inline-flex"
        // eslint-disable-next-line no-console
        onClick={() => console.debug()}
        {...register('email', {
          pattern: 'This field has invalid format',
          required: 'This field is required',
          value: /fish/,
        })}
      />
    </form>
  )
}
