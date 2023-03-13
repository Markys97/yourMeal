import './radio.css'

function Radio({id,name,label ,onchange,value,checked}) {
  return (
    <div className="radio">
        <label className='radio__label' htmlFor={id}>
            <input
             onChange={(e)=>onchange(e)}
             value={value}
            //  checked={checked}
             type="radio" className="radio__input" 
             name={name} id={id} />
            <span  className='radio__cercle'></span>
            <span  className='radio__text'>{label}</span>
        </label>
    </div>
  )
}

export default Radio