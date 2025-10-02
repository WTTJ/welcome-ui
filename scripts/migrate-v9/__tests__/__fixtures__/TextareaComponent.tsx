import { Textarea } from 'welcome-ui/Textarea'

const register = (name: string, options?: object) => {
  return { name, ...options }
}

export const TextareaComponent = () => {
  return (
    <form>
      <Textarea mt="md" name="i18n_description_en" {...register('i18n_description_en')} />
      <Textarea placeholder="Enter description" rows={4} />
    </form>
  )
}
