import styles from './styles.module.scss'
export const SimpleComponent = () => {
  return (
    <div className="container" as="div">
      <Text className="header" as="h1">
        Simple Header
      </Text>
      <div className="content" as="section">
        <div className="button" as="button">
          Click me
        </div>
      </div>
    </div>
  )
}
