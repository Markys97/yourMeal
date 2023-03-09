import './itemProduct.css';
import Button from '../Button/Button';

function ItemProduct() {
  return (
    <div className="itemProduct">
        <div className="itemProduct__content">
            <div className="itemProduct__img">
                <img src="https://markys97.github.io/yourMeal/image/product/01.png" alt="product item" />
            </div>
            <div className="itemProduct__price">689₽</div>
            <div className="itemProduct__name">
                Мясная бомба
            </div>
            <div className="itemProduct__quantity">
                520г
            </div>
          
        </div>
    </div>
  )
}

export default ItemProduct