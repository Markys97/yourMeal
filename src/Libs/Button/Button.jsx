import './button.css'

function Button({ownClass,onClick,textButton}) {
  let customClass= ` button  ${ownClass}`
  return (
    <button onClick={onClick} className={customClass}>{textButton}</button>
  )
}

export default Button