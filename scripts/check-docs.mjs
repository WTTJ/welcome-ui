import { generateWebsiteExamplesPages } from './generate-examples.mjs'
import { generateTypesDoc } from './generate-types-doc.mjs'

async function main() {
  await generateTypesDoc()
  generateWebsiteExamplesPages()
}

// eslint-disable-next-line no-console
main().catch(console.error)
