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
// other categorie
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
    name:'яйца',
    price:160,
    quantity:'210г',
    imgProduct:'https://markys97.github.io/yourMeal/image/product/51.jpeg',
    categorie:'Закуски'

  },
  {
    id:10, 
    name:'ветчина',
    price:560,
    quantity:'210г',
    imgProduct:'https://markys97.github.io/yourMeal/image/product/56.jpeg',
    categorie:'Закуски'

  },
  {
    id:11, 
    name:'Закуски А',
    price:260,
    quantity:'210г',
    imgProduct:'https://markys97.github.io/yourMeal/image/product/55.jpeg',
    categorie:'Закуски'

  },
  {
    id:12, 
    name:'рыба',
    price:160,
    quantity:'210г',
    imgProduct:'https://markys97.github.io/yourMeal/image/product/54.jpeg',
    categorie:'Закуски'

  },
  {
    id:13, 
    name:'Закуски С',
    price:360,
    quantity:'210г',
    imgProduct:'https://markys97.github.io/yourMeal/image/product/52.jpeg',
    categorie:'Закуски'

  },
  {
    id:13, 
    name:'Закуски Д',
    price:360,
    quantity:'210г',
    imgProduct:'https://markys97.github.io/yourMeal/image/product/53.jpeg',
    categorie:'Закуски'

  },
// other categorie
{
  id:14, 
  name:'Хот-доги A',
  price:160,
  quantity:'210г',
  imgProduct:'https://markys97.github.io/yourMeal/image/product/10.png',
  categorie:'Хот-доги'

},
{
  id:15, 
  name:'Хот-доги B',
  price:360,
  quantity:'110г',
  imgProduct:'https://markys97.github.io/yourMeal/image/product/11.png',
  categorie:'Хот-доги'

},
{
  id:16, 
  name:'Хот-доги C',
  price:360,
  quantity:'110г',
  imgProduct:'https://markys97.github.io/yourMeal/image/product/12.png',
  categorie:'Хот-доги'

},
// other categorie
{
  id:17, 
  name:'Пицца A',
  price:360,
  quantity:'110г',
  imgProduct:'https://markys97.github.io/yourMeal/image/product/60.jpeg',
  categorie:'Пицца'

},
{
  id:18, 
  name:'Пицца B',
  price:660,
  quantity:'110г',
  imgProduct:'https://markys97.github.io/yourMeal/image/product/61.png',
  categorie:'Пицца'

},
{
  id:19, 
  name:'Пицца C',
  price:460,
  quantity:'110г',
  imgProduct:'https://markys97.github.io/yourMeal/image/product/62.jpeg',
  categorie:'Пицца'

},
{
  id:20, 
  name:'Пицца D',
  price:1000,
  quantity:'110г',
  imgProduct:'https://markys97.github.io/yourMeal/image/product/63.jpeg',
  categorie:'Пицца'

},

]



root.render(
  <ProductContext.Provider value={listProduct}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductContext.Provider>

);


