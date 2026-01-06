import { notFound } from 'next/navigation'

import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'

import { Mdx } from '~/build-app/components/Mdx'
import { PrevNextPage } from '~/build-app/components/PrevNextPage'
import { TableOfContent } from '~/build-app/components/TableOfContent'
import { DocumentationLayoutChild } from '~/build-app/layouts/Documentation'
import type { Params } from '~/build-app/types'
import { getPageContent } from '~/build-app/utils/page-content'
import { getPages, getStaticParams } from '~/build-app/utils/pages-components'
import { getRepository } from '~/build-app/utils/transform-name'

import { TabList } from './tabs'

export async function generateStaticParams() {
  const pages = getPages()

  return getStaticParams(pages)
}

const Page = async ({ params }: Params) => {
  const { id } = await params
  const componentName = getRepository(id)
  const pages = getPages()

  const { contentWithoutMatter, data, isNotFound, tree } = getPageContent({
    filename: `${componentName}/docs/index.mdx`,
    isPackage: true,
  })

  if (isNotFound) return notFound()

  const title = data?.title
  const description = data?.description
  const ariakitLink = data?.ariakit

  return (
    <DocumentationLayoutChild header={<TabList pages={pages} />} title={title}>
      <main>
        <div className="flex flex-col gap-xl mb-lg">
          {description ? (
            <Text className="text-neutral-60 pt-lg" variant="body-xl">
              {description}
            </Text>
          ) : null}
          <div className="flex gap-md items-center">
            <Button
              as="a"
              href={`https://github.com/WTTJ/welcome-ui/tree/main/lib/src/components/${title}`}
              rel="noreferrer noopener"
              size="md"
              target="_blank"
              variant="secondary"
            >
              <Icon name="github" />
              <span>Source</span>
            </Button>
            {ariakitLink ? (
              <Button
                as="a"
                href={ariakitLink}
                rel="noreferrer noopener"
                size="md"
                target="_blank"
                variant="secondary"
              >
                <svg aria-hidden="true" height="16" viewBox="0 0 48 48">
                  <circle cx="29" cy="24" r="5" />
                  <path
                    clipRule="evenodd"
                    d="M12 4C7.58172 4 4 7.58172 4 12V36C4 40.4183 7.58172 44 12 44H36C40.4183 44 44 40.4183 44 36V12C44 7.58172 40.4183 4 36 4H12ZM23.9997 35.9997C30.6271 35.9997 35.9997 30.6271 35.9997 23.9997C35.9997 17.3723 30.6271 11.9997 23.9997 11.9997C17.3723 11.9997 11.9997 17.3723 11.9997 23.9997C11.9997 30.6271 17.3723 35.9997 23.9997 35.9997Z"
                    fillRule="evenodd"
                  />
                  <path
                    clipRule="evenodd"
                    d="M12 0C5.37258 0 0 5.37258 0 12V36C0 42.6274 5.37258 48 12 48H36C42.6274 48 48 42.6274 48 36V12C48 5.37258 42.6274 0 36 0H12ZM12 2C6.47715 2 2 6.47715 2 12V36C2 41.5228 6.47715 46 12 46H36C41.5228 46 46 41.5228 46 36V12C46 6.47715 41.5228 2 36 2H12Z"
                    fillRule="evenodd"
                  />
                </svg>
                <span>Built with Ariakit</span>
              </Button>
            ) : null}
          </div>
        </div>
        <Mdx>{`<div data-playground="overview.tsx" data-component="${componentName}" data-overview="true"></div>`}</Mdx>
        <Mdx>## Examples</Mdx>
        <Mdx>{contentWithoutMatter}</Mdx>
        <PrevNextPage basePage="components" currentId={id} pages={pages} />
      </main>
      <TableOfContent tree={tree} />
    </DocumentationLayoutChild>
  )
}

export default Page
