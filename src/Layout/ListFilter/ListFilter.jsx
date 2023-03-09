import {useState} from 'react'
import './listFilter.css'

import ItemFilter from '../../Libs/ItemFilter/ItemFilter'

function ListFilter() {

    let [filter,setFilter]= useState([
        {
            iconUrl:'https://markys97.github.io/yourMeal/image/icon/cheeseburger.png',
            name:'Бургеры',
            isActive:true
        },
        {
            iconUrl:'https://markys97.github.io/yourMeal/image/icon/onion.png',
            name:'Закуски',
            isActive:false
        },
        {
            iconUrl:'https://markys97.github.io/yourMeal/image/icon/hotdog.png',
            name:'Хот-доги',
            isActive:false
        },
        {
            iconUrl:'https://markys97.github.io/yourMeal/image/icon/kombo.png',
            name:'Комбо',
            isActive:false
        },
        {
            iconUrl:'https://markys97.github.io/yourMeal/image/icon/chaouarma.png',
            name:'Шаурма',
            isActive:false
        },
        {
            iconUrl:'https://markys97.github.io/yourMeal/image/icon/pizza.png',
            name:'Пицца',
            isActive:false
        },
        {
            iconUrl:'https://markys97.github.io/yourMeal/image/icon/bok.png',
            name:'Вок',
            isActive:false
        },
        {
            iconUrl:'https://markys97.github.io/yourMeal/image/icon/dessert.png',
            name:'Десерты',
            isActive:false
        },
        {
            iconUrl:'https://markys97.github.io/yourMeal/image/icon/sauce.png',
            name:'Соусы',
            isActive:false
        },
    ])
  return (
    <div className='filterList'>
        <div className="filterList__container">
            <div className="filterList__scroll">
                <div className="filterList__row">
                  
                    {
                        filter.map((itemFilter,id)=>  <ItemFilter 
                            key={id+itemFilter.name}
                            data={itemFilter}
                            idItem={id}
                            filter={filter}
                            onClick={setFilter}
                        /> )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListFilter