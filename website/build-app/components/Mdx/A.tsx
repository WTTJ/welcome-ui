import { Link } from '@welcome-ui/link'

interface AProps {
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
