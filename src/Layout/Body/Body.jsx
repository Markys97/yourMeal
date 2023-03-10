import { useContext,useState } from 'react'
import Card from '../../Libs/Card/Card'
import ListProduct from '../ListProduct/ListProduct'
import './body.css'
import {ProductContext} from '../../index'
import {IngredienContext} from '../../Libs/App/App'
function Body() {

  const listProduct= useContext(ProductContext)

  const  {filter}= useContext(IngredienContext)

  const[card,setCard]=useState([])

  const getActiveFilter= filter=>{
   let result= filter.filter(item=> item.isActive)

    return result[0].name;
  }

  const getListProduct = activeFilter=>{
    let NewListProduct= listProduct.filter(product => product.categorie === activeFilter)
    return NewListProduct;
  }

    let finalListProduct =getListProduct(getActiveFilter(filter))

  

  return (
   <div className="main">
        <div className="main__container wrapper">
            <div className="main__content">
                <div className="main__row">
                    
                    <aside className='main__left '>
                       <Card/>
                    </aside>

                    <section className="main__right main-body">
                        <h2 className="main-body__title">{getActiveFilter(filter)}</h2>
                        {
                            (finalListProduct.length!==0)?(
                                <ListProduct products={finalListProduct}/>
                            ):(
                                <div className="main-body__empty">
                                    Тут пока пусто :(
                                </div>
                            )
                        }
                    </section>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Body