import './radio.css'

function Radio({id,name,label ,checked}) {
  return (
    <div className="radio">
        <label className='radio__label' htmlFor={id}>
            <input type="radio" className="radio__input" name={name} id={id} checked={checked} />
            <span className='radio__cercle'></span>
            <span className='radio__text'>{label}</span>
        </label>
    </div>
  )
}

export default Radio