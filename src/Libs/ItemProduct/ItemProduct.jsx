import { useContext } from 'react';
import {CardContext} from '../App/App'
import './itemProduct.css';
import Button from '../Button/Button';


function ItemProduct({dataProduct}) {

    const {card,setCard} = useContext(CardContext)
    const test = (e) => console.log(e.currentTarget)
    const {id,name,price,quantity,imgProduct,categorie}=dataProduct

    const addProduct = id =>{
        let copieCard=[...card];
        let AllProductIdInCard= copieCard.map(item=> item.id)
        if(AllProductIdInCard.includes(id)){
           let finalCard= copieCard.map((productInCard)=>{
                if(productInCard.id === id){
                    productInCard.quantity +=1
                }

                return productInCard
            })

            setCard(prev=> [...prev])
        }else{
            setCard(prev=> [...prev,{id,quantity:1}])
        }
    }
  return (
    <div className="itemProduct">
        <div className="itemProduct__content">
            <div className="itemProduct__img">
                <img src={imgProduct} alt="product item" />
            </div>
            <div className="itemProduct__price">{price}₽</div>
            <div className="itemProduct__name">
                {name}
            </div>
            <div className="itemProduct__quantity">
                {quantity}
            </div>
            <Button
             ownClass="itemProduct__button button--productItem"
             onClick={e=>addProduct(id)}
             textButton="Добавить"
             />
        </div>
    </div>
  )
}

export default ItemProduct