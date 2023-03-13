import {useState} from 'react'
import './form.css';
import Button from '../Button/Button';
import Radio from '../Radio/Radio';
import Input from '../Input/Input';
function Form() {
    const [isDelivery,setIsDeleivery] = useState(() => false);
    const getTypeOrder = (e) => {
        if(e.target.checked){
            console.log(e.target.value)
        }
    }

    const register =() => console.log('mama')
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
                        register={register}
                    />
                     <Input
                        type="text"
                        name="tel"
                        placeholder="Телефон"
                        register={register}
                    />
                   
                </div>
                <div className="form__radios">
                  
                    <Radio
                        id="yourSelf"
                        label="Самовывоз"
                        name="howGetOrder"
                        onchange={getTypeOrder}
                        value='alone'
                        checked={true}

                      
                       
                    />
                    <Radio
                        id="order"
                        label="Доставка"
                        name="howGetOrder"
                        onchange={getTypeOrder}
                        value='delivery'
                        checked={false}
                    />
                    
                   
                </div>
                <div className="form__delivery">
                    <Input
                        type="text"
                        name="addres"
                        placeholder="Улица, дом, квартира"
                        register={register}
                    />
                    {
                        isDelivery &&(
                            <div className="form__delivery-house">
                            
                                <Input
                                    type="text"
                                    name="etag"
                                    placeholder="Этаж"
                                    register={register}
                                />
                                <Input
                                    type="text"
                                    name="number-house"
                                    placeholder="Домофон"
                                    register={register}
                                />
                            </div>
                        )
                    }
                   
                </div>
                <div className="form__submit">
                    <Button
                     type="submit"
                     ownClass="button-submit"
                     textButton="Оформить"/>
                    
                </div>
            </div>
       </div>
       <div className="form__wrapper-img">
            <div className="form__img">
                    <img src="https://markys97.github.io/yourMeal/image/picture/creme.png" alt="image" />
            </div>
       </div>
    </form>
  )
}

export default Form