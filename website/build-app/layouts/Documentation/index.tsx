export type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="gap-md grid lg:grid-cols-[16rem_auto] max-w-[87.5rem] mx-auto pb-3xl px-xl text-neutral-80">
      {children}
    </div>
  )
}

export const Child = ({ children }: LayoutProps) => {
  return <div className="gap-xl grid xl:grid-cols-[auto_15rem]">{children}</div>
}
