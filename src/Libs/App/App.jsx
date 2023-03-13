import {useContext,useState,createContext} from 'react'
import './App.css'
import Index  from '../../Page/Index/Index'
import Modal from '../Modal/Modal'
import ProductPreview from '../ProductPreview/ProductPreview'
import Form from '../Form/Form'
import { ProductContext } from '../..'

export const IngredienContext = createContext({})
export  const CardContext =createContext([])
export  const ModalContext =createContext(false)


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

  const listProduct = useContext(ProductContext)

  const [idProductPreview, setIdProductPreview] = useState(null)
  const[ingredients, setIngredients]= useState(listIngredien)
  const [card,setCard]=useState([]);
  const [isOpenProductPreview, setIsOpenProductPreview]= useState(false)
  const [isOpenModal, setIsOpenModal]= useState(true)
  const [isWantBuy, setIsWantBuy]= useState(true)


  const getProductPreview = (id,products)=>{
    if(id !== null){
        let result= products.filter(product => product.id == id)
        return result[0]
    }else{
       
        return 'no product with that id'
    }
  }

    const currentProductPreview = getProductPreview(idProductPreview,listProduct)


  
  const modalValue ={
    stateGlobalInModal:{
        productPreview:[isOpenProductPreview, setIsOpenProductPreview],
        modal:[isOpenModal, setIsOpenModal],
        currentProductPreview:[idProductPreview, setIdProductPreview]
    }
  }

  return (
   <>
   <IngredienContext.Provider value={{filter:ingredients,setFilter:setIngredients}}>
    <CardContext.Provider value={{card,setCard}}>
        <ModalContext.Provider value={modalValue}>
            <Index/>
            {
                isOpenModal &&(
                    <Modal>
                        { isOpenProductPreview && <ProductPreview dataProduct={currentProductPreview} />}
                        { isWantBuy &&  <Form/>}
                    </Modal>
                )
            }
        </ModalContext.Provider>
    </CardContext.Provider>

   </IngredienContext.Provider>
   
   </>
  )
}

export default App;
