import './input.css'

function Input({type,name,placeholder,register,require,errors}) {
 let option = {...require}
 console.log(errors?.name,name)

  return (
    <div className="input">
        <input
        className={errors?.name ? 'error' : ''}
        type={type}
         name={name} 
         placeholder={placeholder}
         {...register(name,option)}/>
    </div>
  )
}

export default Input