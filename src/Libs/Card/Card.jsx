import { useState,useContext } from 'react';
import './card.css';
import Button from '../Button/Button';

import ProductInCard from '../ProductInCard/ProductInCard';

import {CardContext} from '../App/App'

import {ProductContext} from '../../index'


function Card() {
    const[isOpencard, setIsOpenCard]= useState(false)
    const listProduct = useContext(ProductContext)

    const {card,setCard} = useContext(CardContext)

    let cardClassName= isOpencard ? 'card isOpen' : 'card'
    
    window.addEventListener('resize', e =>{
        setIsOpenCard(false)
    })
    
    const handlerOpenCard= ()=> setIsOpenCard(prev=>{
        return !prev
    })

    let conditonClass= ((window.screen.width >=768 && window.screen.width < 1024) && isOpencard) && 'long';
    
    const getTotalProductInCard =()=>{
        let total=0
        card.forEach(product => {
            total += product.quantity
        });

        return total
    }

    const getListProductInCard =()=>{
        let listIdProduct= card.map(product=> product.id);

        return listProduct.filter(product => listIdProduct.includes(product.id))

    }
    const getTotalCardPrice =()=>{
       let totalPrice=0;

        let cardCopie= [...card];
        let listId= cardCopie.map(item => item.id )
        let listProduct=getListProductInCard();

        let helper=listProduct.map(product=>{
            if(listId.includes(product.id))
            {
                return {id:product.id,price:product.price}
            }
        })

        for(let i=0; i<helper.length;i++){
            
            for(let j=0;j<cardCopie.length; j++){
                if(helper[i].id === cardCopie[j].id){
                    helper[i].quantity= cardCopie[j].quantity
                }
            }
        }

        helper.forEach(item=>{
            totalPrice += (item.quantity* item.price)
        })

        return totalPrice



    }

    let totalCardPrice= getTotalCardPrice()

    getTotalCardPrice()

    let totalProductInCard = getTotalProductInCard()
    let listProductInCard=getListProductInCard()

    return (
        <div className={`${cardClassName}  ${conditonClass}`} >
            <div className="card__content" >
                <div onClick={handlerOpenCard} className="card__head">
                    <div className="card__title">Корзина</div>
                    <div className="card__total-product">
                        {totalProductInCard}
                    </div>
                </div>
                {
                    isOpencard && (
                        <div className="card__main">
                            {
                                (totalProductInCard!==0) ?(
                                    <div className="card__main-with-product">
                                        <div className="card__body">
                                        
                                            {
                                                listProductInCard.map((product,id)=> {
                                                return  <ProductInCard
                                                    key={id}
                                                    dataProduct={product}
                                                
                                                    />
                                                    
                                                })
                                            }
                                        </div>
                                        
                                        <div className="card__footer">
                                            <div className="card__footer-top">
                                                <div className="card__footer-title">Итого</div>
                                                <div className="card__footer-price">{totalCardPrice}₽</div>
                                            </div>
            
                                            <div className="card__footer-middle">
                                                
                                                <Button
                                                    ownClass="card__footer-btn button--card"
                                                    onClick={''}
                                                    textButton="Оформить заказ"
                                                />
                                            </div>
            
                                            <div className="card__footer-bottom">
                                                <div className="card__footer-subtitle order">Бесплатная доставка</div>
                                                <div onClick={()=>setIsOpenCard(false)} className="card__close-button">Свернуть</div>
                                            </div>
                                        </div>
                                    </div>
                                ):(
                                    <div className="card__main-empty">
                                        Тут пока пусто :(
                                    </div>
                                )
                            }
                            
                        
                        </div>
                    )
                }
            
            </div>
        </div>
    )
}

export default Card