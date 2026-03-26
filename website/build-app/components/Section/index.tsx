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
    <Element className={`nine:md:py-[90px] nine:py-xxl nine:relative ${className}`} {...rest}>
      <div className="nine:max-w-[75rem] nine:mx-auto nine:px-lg nine:relative">{children}</div>
    </Element>
  )
}
