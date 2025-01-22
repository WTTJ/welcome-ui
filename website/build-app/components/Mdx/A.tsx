import { Link } from 'welcome-ui/Link'

type AProps = {
  children: React.ReactNode
  href: string
}

export const A = ({ children, href, ...rest }: AProps) => {
  return (
    <Link href={href} isExternal rel="noreferrer noopener" target="_blank" {...rest}>
      {children}
    </Link>
  )
}
