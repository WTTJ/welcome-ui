type AProps = React.HTMLAttributes<HTMLImageElement> & {
  children: React.ReactNode
}

export const Image = (props: AProps) => {
  return <img className="nine:max-w-full" {...props} />
}
