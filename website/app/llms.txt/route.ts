import { generateLlmsTxt } from '~/build-app/utils/generate-llms'

export const dynamic = 'force-static'

export function GET() {
  const content = generateLlmsTxt()
  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
