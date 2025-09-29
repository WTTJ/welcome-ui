import { Link } from '@/components/Link'

type AProps = {
  children: React.ReactNode
  href: string
}

export const A = ({ children, href, ...rest }: AProps) => {
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  )
}
