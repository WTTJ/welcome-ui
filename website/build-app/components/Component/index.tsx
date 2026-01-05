'use client'
import Link from 'next/link'

import { Badge } from '@/components/Badge'
import { Card } from '@/components/Card'
import { Text } from '@/components/Text'

type PageProps = {
  description: string
  id: string
  isNew?: boolean
  title: string
}

export function Component({ description, id, isNew, title }: PageProps) {
  return (
    <Link className="h-full" href={`/components/${id}`}>
      <Card className="h-full">
        <Card.Header>
          {title}
          {isNew ? <Badge variant="brand">NEW</Badge> : null}
        </Card.Header>
        <Card.Body className="line-clamp-3">
          <Text className="text-neutral-70" lines={3}>
            {description}
          </Text>
        </Card.Body>
      </Card>
    </Link>
  )
}
