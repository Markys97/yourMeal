import './card.css';

function Card() {
  return (
    <div className="card">
        <div className="card__content">
            <div className="card__head">
                <div className="card__title">Корзина</div>
                <div className="card__total-product">
                    4
                </div>
            </div>
            <div className="card__main">
                <div className="card__body">
                    <div className="card__item item-card">
                        <div className="item-card__row">
                            <div className="item-card__body">
                                <div className="item-card__img">
                                    <img src="/image/product/01.png" alt="product picture" />
                                </div>
                                <div className="item-card__info">
                                    <div className="item-card__name">Супер сырный</div>
                                    <div className="item-card__quantity">512г</div>
                                    <div className="item-card__price">550₽</div>
                                </div>
                            </div>
                            <div className="item-card__handler-quantity">
                                <button className="button-handler">
                                    <div className="button-handler__row">
                                        <span className="button-handler__button button-handler__button--dec">-</span>
                                        <span className="button-handler__value">100</span>
                                        <span className="button-handler__button button-handler__button--inc">+</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="card__footer">
                    <div className="card__footer-top">
                        <div className="card__footer-title">Итого</div>
                        <div className="card__footer-price">1279₽</div>
                    </div>

                    <div className="card__footer-middle">
                        <button className="card__footer-btn button button--card">Оформить заказ</button>
                    </div>

                    <div className="card__footer-bottom">
                        <div className="card__footer-subtitle order">Бесплатная доставка</div>
                        <div className="card__close-button">Свернуть</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card