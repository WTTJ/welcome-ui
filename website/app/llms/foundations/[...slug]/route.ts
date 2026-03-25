import { generateFoundationMarkdown, getFoundationList } from '~/build-app/utils/generate-llms'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return getFoundationList().map(({ slugParts }) => ({
    slug: [...slugParts.slice(0, -1), `${slugParts[slugParts.length - 1]}.md`],
  }))
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const slugParts = [...slug]
  slugParts[slugParts.length - 1] = slugParts[slugParts.length - 1].replace(/\.md$/, '')

  const { markdown } = generateFoundationMarkdown(slugParts)

  return new Response(markdown, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
