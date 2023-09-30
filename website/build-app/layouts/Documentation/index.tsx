export type DocumentationLayoutProps = {
  children: React.ReactNode
}

export const DocumentationLayout = ({ children }: DocumentationLayoutProps) => {
  return (
    <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 2fr 1fr' }}>
      {children}
    </div>
  )
}
