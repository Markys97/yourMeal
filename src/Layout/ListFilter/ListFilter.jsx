import {useState,useContext} from 'react'
import './listFilter.css'

import {IngredienContext} from '../../Libs/App/App' 

import ItemFilter from '../../Libs/ItemFilter/ItemFilter'

function ListFilter() {
    let {filter,setFilter}= useContext(IngredienContext)
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