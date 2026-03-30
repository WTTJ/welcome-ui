import { generateComponentMarkdown, getComponentList } from '~/build-app/utils/generate-llms'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return getComponentList().map(({ id }) => ({ slug: `${id}.md` }))
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const id = slug.replace(/\.md$/, '')
  const { markdown } = generateComponentMarkdown(id)

  return new Response(markdown, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
