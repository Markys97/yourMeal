import './input.css'

function Input({type,name,placeholder,value}) {
  return (
    <div className="input">
        <input type={type} name={name} placeholder={placeholder} value={value}/>
    </div>
  )
}

export default Input