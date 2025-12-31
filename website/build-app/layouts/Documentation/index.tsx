'use client'
import { Text } from '@/components/Text'
import { Window } from '@/components/Window'

export type LayoutProps = {
  children: React.ReactNode
}

type ChildProps = {
  children: [React.ReactNode, React.ReactNode]
  header: React.ReactNode
  title?: string
}

export const DocumentationLayout = ({ children }: LayoutProps) => {
  return (
    <div className="gap-xxl grid lg:grid-cols-[220px_auto] pb-3xl text-neutral-80 mt-xxl">
      {children}
    </div>
  )
}

export const DocumentationLayoutChild = ({
  children: [content, toc],
  header,
  title,
}: ChildProps) => {
  return (
    <div className="gap-xl grid xl:grid-cols-[auto_220px] relative">
      <Window as="nav">
        <Window.Header>{header}</Window.Header>
        <Window.Body>
          {title ? (
            <Text as="h1" className="mt-lg" variant="display-md">
              {title}
            </Text>
          ) : null}
          {content}
        </Window.Body>
      </Window>
      {toc}
    </div>
  )
}
