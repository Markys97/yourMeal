import React from 'react'
import './buttonHandlerQuantity.css';

function ButtonHandlerQuantity() {
  return (
    <button className="button-handler">
    <div className="button-handler__row">
        <span className="button-handler__button button-handler__button--dec">-</span>
        <span className="button-handler__value">100</span>
        <span className="button-handler__button button-handler__button--inc">+</span>
    </div>
</button>
  )
}

export default ButtonHandlerQuantity