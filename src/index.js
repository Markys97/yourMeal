import React,{createContext } from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Libs/App/App';


const root = ReactDOM.createRoot(document.getElementById('root'));

export const ProductContext= createContext([])


let listProduct=[
  {
    id:1,
    name:'Мясная бомба',
    price:689,
    quantity:'520г',
    imgProduct:'https://markys97.github.io/yourMeal/image/product/01.png',
    categorie:'Бургеры'

  },
  {
    id:2,
    name:'Супер сырный',
    price:550,
    quantity:'512г',
    imgProduct:'https://markys97.github.io/yourMeal/image/product/02.png',
    categorie:'Бургеры'

  },
  {
    id:3,
    name:'Сытный',
    price:639,
    quantity:'580г',
    imgProduct:'https://markys97.github.io/yourMeal/image/product/03.png',
    categorie:'Бургеры'

  },
  {
    id:4,
    name:'Тяжелый удар',
    price:480,
    quantity:'470г',
    imgProduct:'https://markys97.github.io/yourMeal/image/product/04.png',
    categorie:'Бургеры'

  },
  {
    id:5,
    name:'Вечная классика',
    price:450,
    quantity:'450г',
    imgProduct:'https://markys97.github.io/yourMeal/image/product/05.png',
    categorie:'Бургеры'

  },
  {
    id:6, 
    name:'Итальянский',
    price:560,
    quantity:'510г',
    imgProduct:'https://markys97.github.io/yourMeal/image/product/06.png',
    categorie:'Бургеры'

  },

  {
    id:7, 
    name:'картофель фри',
    price:160,
    quantity:'210г',
    imgProduct:'https://markys97.github.io/yourMeal/image/product/08.png',
    categorie:'Закуски'

  },
  {
    id:8, 
    name:'чипсы',
    price:160,
    quantity:'210г',
    imgProduct:'https://markys97.github.io/yourMeal/image/product/07.png',
    categorie:'Закуски'

  },
  {
    id:9, 
    name:'чипсы',
    price:160,
    quantity:'210г',
    imgProduct:'https://markys97.github.io/yourMeal/image/product/56.jpeg',
    categorie:'Закуски'

  },
]



root.render(
  <ProductContext.Provider value={listProduct}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductContext.Provider>

);


