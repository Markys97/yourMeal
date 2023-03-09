import Card from '../../Libs/Card/Card'
import ListProduct from '../ListProduct/ListProduct'
import './body.css'
function Body() {
  return (
   <div className="main">
        <div className="main__container wrapper">
            <div className="main__content">
                <div className="main__row">
                {/* main__left--short */}
                    <aside className='main__left '>
                       <Card/>
                    </aside>
                    <section className="main__right main-body">
                        <h2 className="main-body__title">Бургеры</h2>
                        <ListProduct/>
                    </section>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Body