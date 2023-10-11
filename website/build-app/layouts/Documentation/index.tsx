import { Grid } from '@welcome-ui/grid'

export type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid gap="md" margin="0 auto" maxWidth={1400} px="xl" templateColumns="16rem 1fr">
      {children}
    </Grid>
  )
}

export const Child = ({ children }: LayoutProps) => {
  return (
    <Grid gap="xl" templateColumns="1fr 15rem">
      {children}
    </Grid>
  )
}
