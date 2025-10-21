import { Alert } from 'welcome-ui/Alert'

export const AlertComponent = () => {
  return (
    <div>
      <Alert mb="lg" variant="success">
        Success message
      </Alert>
      <Alert borderRadius="md" mt="md" p="lg" variant="warning">
        Warning with custom styling
      </Alert>
    </div>
  )
}
