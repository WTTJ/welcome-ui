type Page = {
  id: string
  parent?: string
  subPages?: string[]
  title?: string
}

export type PageTree = {
  category?: string
  pages: Page[]
  parent: string
}[]
