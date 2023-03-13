import './input.css'

function Input({type,name,placeholder,register}) {
  return (
    <div className="input">
        <input type={type} name={name} placeholder={placeholder} {...register(name)}/>
    </div>
  )
}

export default Input