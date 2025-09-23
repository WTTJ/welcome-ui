type AProps = React.HTMLAttributes<HTMLImageElement> & {
  children: React.ReactNode
}

export const Image = (props: AProps) => {
  return <img className="max-w-full" {...props} />
}
