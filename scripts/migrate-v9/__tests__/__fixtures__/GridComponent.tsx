import { Grid } from 'welcome-ui/Grid'

export const GridComponent = () => {
  return (
    <div>
      <Grid columns={2} gutter="sm">
        <div>Grid item 1</div>
        <div>Grid item 2</div>
      </Grid>
    </div>
  )
}
