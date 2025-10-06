import './styles.scss'
type Variant = 'primary' | 'secondary'
export const ComplexComponent = ({ variant = 'primary' }: { variant?: Variant }) => {
  return (
    <div className="wrapper" style={wrapperStyle}>
      <Link className="card elevated">
        <Text className="title display-detail" as="h3">
          Complex component
        </Text>
      </Link>
      <div className="trigger-button is-active is-expanded" as="buttonBox">
        Toggle
      </div>
    </div>
  )
}
