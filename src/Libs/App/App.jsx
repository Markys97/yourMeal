import {useContext,useState,createContext} from 'react'
import './App.css'
import Index  from '../../Page/Index/Index'
export const IngredienContext = createContext({})
export  const CardContext =createContext([])
function App() {


  let listIngredien= [
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
  ]
  const[ingredients, setIngredients]= useState(listIngredien)
  const [card,setCard]=useState([]);


  return (
   <>
   <IngredienContext.Provider value={{filter:ingredients,setFilter:setIngredients}}>
    <CardContext.Provider value={{card,setCard}}>
      <Index/>
    </CardContext.Provider>

   </IngredienContext.Provider>
   
   </>
  )
}

export default App;
