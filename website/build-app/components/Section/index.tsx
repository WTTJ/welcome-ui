type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: 'footer' | 'section'
}

export const Section = ({
  as: Element = 'section',
  children,
  className,
  ...rest
}: SectionProps) => {
  return (
    <Element className={`md:py-90 py-xxl relative ${className}`} {...rest}>
      <div className="relative">{children}</div>
    </Element>
  )
}
