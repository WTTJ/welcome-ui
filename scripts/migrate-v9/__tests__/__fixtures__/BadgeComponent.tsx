import { Badge } from 'welcome-ui/Badge'

export const BadgeComponent = () => {
  return (
    <div>
      <Badge ml="sm" size="sm" variant="primary">
        14
      </Badge>
      <Badge mr="md" size="lg" variant="secondary">
        New
      </Badge>
    </div>
  )
}
