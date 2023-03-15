import {useEffect, useState} from 'react'
import { useForm } from 'react-hook-form';
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


    useEffect(() =>{
       let defaultRadio= document.querySelector(`input[value=${typeOrder}]`)
       defaultRadio.setAttribute('checked','true')
    },[])

    const { register,handleSubmit,formState:{errors,isSubmitted,isValid},formState}= useForm();
    const sendOrder = data => {
       
        if( isSubmitted && isSubmitted){
            alert(JSON.stringify(data))
        }
    }

    useEffect(()=>{
        console.log(formState,11)
    },[formState])
  return (
    <form className='form' onSubmit={handleSubmit(sendOrder)}>
       <div className="form__content">
            <div className="form__title">Доставка</div>
            <div className="form__body">
                <div className="form__inputs">
                    <Input
                        type="text"
                        name="name"
                        placeholder="Ваше имя"
                        register={register}
                        require={{required:'Обязательное поле'}}
                        errors={errors}
                       
                       
                    />
                     <Input
                        type="text"
                        name="tel"
                        placeholder="Телефон"
                        register={register}
                        require={{required:'Обязательное поле'}}
                        errors={errors}
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
                        register={register}

                      
                       
                    />
                    <Radio
                        id="order"
                        label="Доставка"
                        name="howGetOrder"
                        onchange={getTypeOrder}
                        value='delivery'
                        register={register}
                       
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
                                require={{required:'Обязательное поле'}}
                                errors={errors}
                            />
                            
                            
                            <div className="form__delivery-house">
                            
                                <Input
                                    type="text"
                                    name="number-house"
                                    placeholder="Этаж"
                                    register={register}
                                    require={{required:'Обязательное поле'}}
                                    errors={errors}
                                />
                                <Input
                                    type="text"
                                    name="number-door"
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