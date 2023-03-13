import {useEffect, useState} from 'react'
import './form.css';
import Button from '../Button/Button';
import Radio from '../Radio/Radio';
import Input from '../Input/Input';
function Form() {
    const [typeOrder,setTypeOrder] = useState(() => 'alone');
    const getTypeOrder = (e) => {
        if(e.target.checked){
            setTypeOrder(e.target.value)
        }
    }

    const register =() => console.log('mama')

    useEffect(() =>{
       let defaultRadio= document.querySelector(`input[value=${typeOrder}]`)
       defaultRadio.setAttribute('checked','true')
    },[])

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
                        isChecked={true}

                      
                       
                    />
                    <Radio
                        id="order"
                        label="Доставка"
                        name="howGetOrder"
                        onchange={getTypeOrder}
                        value='delivery'
                       
                    />
                    
                   
                </div>
                {
                     typeOrder!== 'alone' && (
                        <div className="form__delivery">
                            <Input
                                type="text"
                                name="addres"
                                placeholder="Улица, дом, квартира"
                                register={register}
                            />
                            
                            
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
    
                       
                        </div>
                     )
                }

                <div className={'form__submit' + " "+ ((typeOrder=== 'alone')&& 'form__submit--fare' )}>
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