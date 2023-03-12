import {useState,useContext} from 'react'
import './buttonHandlerQuantity.css'
import {CardContext,ModalContext} from '../App/App'


function ButtonHandlerQuantity({idProduct,type,onclick,quantityDefault}) {

  const {stateGlobalInModal} = useContext(ModalContext)
  const { modal:[isOpenModal,setIsOpenModal]}= stateGlobalInModal;
  const {card,setCard} = useContext(CardContext)
    const getQuantityProductPerProduct = (card, idProduct) => {
      let quantity = null;
      card.forEach(product => {
          if(product.id === idProduct){
              quantity = product.quantity 
          }
      })

      return quantity
      
  }

  const incrementNumberProduct =(id,card) => {
    let cardClown = [...card];
    cardClown.forEach(product=>{
      if(product.id === id){
        product.quantity++
      }
    })

    setCard(()=> cardClown)
  }
  const decrementNumberProduct =(id,card) => {
    let cardClown = [...card];
    cardClown.forEach(product=>{
      if(product.id === id){
        --product.quantity
       if(product.quantity!==0){
        setCard(()=> cardClown)
       }else{
        let newCard= cardClown.filter(product=> product.id !== id)
        setCard(()=> newCard)
       }
      }
    })

    
  }

  let quantity= getQuantityProductPerProduct(card,idProduct)

  const incrementDefaultQuantity = () => {
    onclick(prev => prev+1)
  }

  const decrementDefaultQuantity = () => {
    onclick(prev => prev-1)
    if(quantityDefault ===1){
      setIsOpenModal(()=> false)
    }
  }
  if(type === 'default'){
      return(
      <button className="button-handler">
        <div className="button-handler__row">
            <span onClick={()=> decrementDefaultQuantity()} className="button-handler__button button-handler__button--dec">-</span>
            <span className="button-handler__value">{quantityDefault}</span>
            <span onClick={()=> incrementDefaultQuantity()}  className="button-handler__button button-handler__button--inc">+</span>
        </div>
      </button>
      )
  }

  return (
    <button className="button-handler">
      <div className="button-handler__row">
          <span className="button-handler__button button-handler__button--dec" onClick={()=> decrementNumberProduct(idProduct,card)}>-</span>
          <span className="button-handler__value">{quantity}</span>
          <span onClick={()=> incrementNumberProduct(idProduct,card)} className="button-handler__button button-handler__button--inc">+</span>
      </div>
  </button>
  )
 
}

export default ButtonHandlerQuantity