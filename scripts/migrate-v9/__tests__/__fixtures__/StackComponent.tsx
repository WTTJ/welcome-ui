import { Stack } from 'welcome-ui/Stack'

export const StackComponent = () => {
  return (
    <div>
      <Stack alignItems="center" direction="row" spacing="xxs">
        <div>Stack item 1</div>
        <div>Stack item 2</div>
      </Stack>
      <Stack flex={1} gap="xxl">
        <div>Flexible stack item</div>
      </Stack>
    </div>
  )
}
