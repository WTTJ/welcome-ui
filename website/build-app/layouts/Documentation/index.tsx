import { Grid } from '@/Grid'

export type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid
      gap="md"
      margin="0 auto"
      maxWidth={1400}
      pb="3xl"
      px="xl"
      templateColumns={{ lg: '16rem auto' }}
    >
      {children}
    </Grid>
  )
}

export const Child = ({ children }: LayoutProps) => {
  return (
    <Grid gap="xl" templateColumns={{ xl: 'auto 15rem' }}>
      {children}
    </Grid>
  )
}
