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
    <Element className={`md:py-[90px] py-xxl relative ${className}`} {...rest}>
      <div className="max-w-[75rem] mx-auto px-lg relative">{children}</div>
    </Element>
  )
}
