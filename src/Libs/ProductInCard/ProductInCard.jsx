import {useState} from 'react'
import './productInCard.css'
import ButtonHandlerQuantity from '../ButtonHandlerQuantity/ButtonHandlerQuantity'

function ProductInCard({dataProduct,number}) {
    let {id,name,price,quantity,categorie,imgProduct}=dataProduct;

  return (
    <div className="item-card">
        <div className="item-card__row">
            <div className="item-card__body">
                <div className="item-card__img">
                    <img src={imgProduct} alt="product picture" />
                </div>
                <div className="item-card__info">
                    <div className="item-card__name">{name}</div>
                    <div className="item-card__quantity">{quantity}</div>
                    <div className="item-card__price">{price}₽</div>
                </div>
            </div>
            <div className="item-card__handler-quantity">
                <ButtonHandlerQuantity idProduct={id} />
            </div>
        </div>
    </div>
  )
}

export default ProductInCard