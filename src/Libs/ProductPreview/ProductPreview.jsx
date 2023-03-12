 import { useContext, useState } from 'react'
import './productPreview.css'
import Button from '../Button/Button'
import ButtonHandlerQuantity from '../ButtonHandlerQuantity/ButtonHandlerQuantity'
import { CardContext,ModalContext} from '../App/App'


function ProductPreview({dataProduct}) {

    const {stateGlobalInModal} = useContext(ModalContext)
    const {modal:[isOpenModal,setIsOpenModal]}= stateGlobalInModal;

    const {card,setCard} = useContext(CardContext)
    const [defaultQuantity,setDefaultQuantity] = useState(1)
    const {id,name,price,quantity,imgProduct}= dataProduct

    const addProductPreviewInCad = () =>{
        let cardClown =  [...card];
        let AllProductInCart= cardClown.map(product=> product.id)

       if(AllProductInCart.includes(id)){
            let newCard=cardClown.map(product => {
                if(product.id === id){
                    product.quantity = defaultQuantity
                }

                return product
            })

            setCard(()=> newCard)
           

       }else{
        setCard(prev => [...prev,{id,quantity:defaultQuantity}])
       }
       setIsOpenModal(()=> false)
    }
  return (
        <div className="productPreview">
            <div className="productPreview__content">
                <div className="productPreview__title">{name}</div>
                <div className="productPreview__main">
                    <div className="productPreview__img">
                        <img src={imgProduct} alt={`picture of ` + name} />
                    </div>
                    <div className="productPreview__body">
                        <div className="productPreview__description">
                            Супер мясное наслаждение! Большая рубленая котлета из свежего 
                            говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.
                        </div>
                        <div className="productPreview__subtitle">Состав:</div>
                        <ul className="productPreview__list">
                            <li className="productPreview__list-item">Пшеничная булочка</li>
                            <li className="productPreview__list-item">Котлета из говядины</li>
                            <li className="productPreview__list-item">Красный лук</li>
                            <li className="productPreview__list-item">Листья салата</li>
                            <li className="productPreview__list-item">Соус горчичный</li>
                        </ul>
                        <div className="productPreview__detail">{quantity}, ккал 430</div>
                    </div>
                    
                </div>

                <div className="productPreview__footer">
                    <div className="productPreview__footer-left">
                    <Button
                        ownClass="card__footer-btn button--card"
                        onClick={addProductPreviewInCad}
                        textButton="Добавить"
                    />
                    </div>

                    <div className="productPreview__footer-right">
                        <ButtonHandlerQuantity type="default" quantityDefault={defaultQuantity} onclick={setDefaultQuantity}/>
                        <div className="productPreview__price">{price * defaultQuantity}₽</div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductPreview