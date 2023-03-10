import './listProduct.css'
import ItemProduct from '../../Libs/ItemProduct/ItemProduct'


function ListProduct({products}) {

  return (
    <div className=" listProduct">
       
        {
          products.map((product,index) => <ItemProduct key={index} dataProduct={product}/> )
        }
    </div>
  )
}

export default ListProduct