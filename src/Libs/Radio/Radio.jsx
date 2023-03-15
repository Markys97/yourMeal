import './radio.css'

function Radio({id,name,label ,onchange,value,register}) {
  return (
    <div className="radio">
        <label className='radio__label' htmlFor={id}>
            <input
              // checked={isChecked}
             onChange={(e)=> onchange(e)}
             value={value}
             type="radio" className="radio__input" 
             name={name} id={id}

              />
            <span  className='radio__cercle'></span>
            <span  className='radio__text'>{label}</span>
          
        </label>
    </div>
  )
}

export default Radio