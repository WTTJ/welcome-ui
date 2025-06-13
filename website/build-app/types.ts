export type PageTree = {
  category?: string
  pages: Page[]
  parent: string
}[]

export type Params<
  T = {
    id: string
  },
> = {
  params: Promise<T>
}

type Page = {
  id: string
  parent?: string
  subPages?: string[]
  title?: string
}
