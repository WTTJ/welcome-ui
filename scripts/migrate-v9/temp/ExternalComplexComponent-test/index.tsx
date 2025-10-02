import './styles.scss'

type Variant = 'primary' | 'secondary'

export const ComplexComponent = ({ variant = 'primary' }: { variant?: Variant }) => {
  return (
    <div className="wrapper" variant={variant}>
      <div className="card" elevated>
        <h3 className="title" displayDetail>
          Complex component
        </h3>
      </div>
      <button $isActive={false} $isExpanded={false} className="trigger-button">
        Toggle
      </button>
    </div>
  )
}
