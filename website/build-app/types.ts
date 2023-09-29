type Page = {
  id: string
  subPages?: string[]
  parent?: string
}

export type PageTree = {
  pages: Page[]
  category?: string
  parent: string
}[]
