import PropTypes from "prop-types"

const Button = ({ children, version, type, isDisable }) => {
  return (
    <div type={type} disabled={isDisable} className={`btn btn-${version}`}>
      {children}
    </div>
  )
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisable: false
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisable: PropTypes.bool
}

export default Button
