import './form.css';
import Button from '../Button/Button';

function Form() {
  return (
    <form className='form'>
       <div className="form__content">
            <div className="form__title">Доставка</div>
            <div className="form__body">
                <div className="input">
                    <input type="text" name='name' placeholder='Ваше имя'/>
                </div>
                <div className="input">
                    <input type="text" name='tel' placeholder='Телефон имя'/>
                </div>
                <div className="form__radios">
                    <div className="radio">
                        <label className='radio__label' htmlFor="yourSelf">
                            <input type="radio" className="radio__input" name='howGetOrder' />
                            <span className='radio__cercle'></span>
                            <span className='radio__text'>Самовывоз</span>
                        </label>
                    </div>
                    <div className="radio">
                        <label className='radio__label' htmlFor="yourSelf">
                            <input type="radio" className="radio__input" name='howGetOrder' />
                            <span className='radio__cercle'></span>
                            <span className='radio__text'>Доставка</span>
                        </label>
                    </div>
                </div>
                <div className="form__delivery">
                    <div className="input">
                        <input type="text" name='addres' placeholder='Улица, дом, квартира'/>
                    </div>
                    <div className="form__delivery-house">
                        <div className="input">
                            <input type="text" name='etag' placeholder=''/>
                        </div>
                        <div className="input">
                            <input type="text" name='number-house' placeholder='Домофон'/>
                        </div>
                    </div>
                </div>
                <div className="form__submit">
                    <Button
                     type="submit"
                     textButton="Оформить"/>
                </div>
            </div>
       </div>
    </form>
  )
}

export default Form