import './button.css'

function Button({ownClass,onClick,textButton,type}) {
  let customClass= ` button  ${ownClass}`
  return (
    <button type={type} onClick={onClick} className={customClass}>{textButton}</button>
  )
}

export default Button