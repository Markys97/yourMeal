import './form.css';
import Button from '../Button/Button';
import Radio from '../Radio/Radio';
import Input from '../Input/Input';
function Form() {
  return (
    <form className='form'>
       <div className="form__content">
            <div className="form__title">Доставка</div>
            <div className="form__body">
                <div className="form__inputs">
                    <Input
                        type="text"
                        name="name"
                        placeholder="Ваше имя"
                        value=""
                    />
                     <Input
                        type="text"
                        name="tel"
                        placeholder="Телефон"
                        value=""
                    />
                   
                </div>
                <div className="form__radios">
                  
                    <Radio
                        id="yourSelf"
                        label="Самовывоз"
                        name="howGetOrder"
                        checked="checked"
                    />
                    <Radio
                        id="order"
                        label="Доставка"
                        name="howGetOrder"
                    />
                    
                   
                </div>
                <div className="form__delivery">
                    <Input
                        type="text"
                        name="addres"
                        placeholder="Улица, дом, квартира"
                        value=""
                    />
                    
                    <div className="form__delivery-house">
                        
                        <Input
                            type="text"
                            name="etag"
                            placeholder="Этаж"
                            value=""
                        />
                        <Input
                            type="text"
                            name="number-house"
                            placeholder="Домофон"
                            value=""
                        />
                    </div>
                </div>
                <div className="form__submit">
                    <Button
                     type="submit"
                     ownClass="button-submit"
                     textButton="Оформить"/>
                    
                </div>
            </div>
       </div>
    </form>
  )
}

export default Form