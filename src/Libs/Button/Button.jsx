import './button.css'

function Button({ownClass}) {
  let customClass= ` button  ${ownClass}`
  return (
    <button className={customClass}>Добавить</button>
  )
}

export default Button