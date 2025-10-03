import './styles.scss'
type Variant = 'primary' | 'secondary'
export const ComplexComponent = ({ variant = 'primary' }: { variant?: Variant }) => {
  return (
    <div className="wrapper" style={wrapperStyle}>
      <div className="card elevated">
        <h3 className="title display-detail">Complex component</h3>
      </div>
      <button className="trigger-button is-active is-expanded">Toggle</button>
    </div>
  )
}
