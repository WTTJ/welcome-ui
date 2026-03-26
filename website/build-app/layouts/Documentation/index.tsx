export type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="nine:gap-md nine:grid nine:lg:grid-cols-[16rem_auto] nine:max-w-[87.5rem] nine:mx-auto nine:pb-3xl nine:px-xl nine:text-neutral-80">
      {children}
    </div>
  )
}

export const Child = ({ children }: LayoutProps) => {
  return <div className="nine:gap-xl nine:grid nine:xl:grid-cols-[auto_15rem]">{children}</div>
}
