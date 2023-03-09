import React from 'react'
import './itemFilter.css'

function ItemFilter({data,idItem,filter,onClick}) {
    let {iconUrl,name,isActive} = data
    const changeStateItem = idItem=>{
       let newFilter=  filter.map((itemFilter,id)=>{
            itemFilter.isActive=false
            if(id === idItem){
                itemFilter.isActive=!itemFilter.isActive
            }
            return itemFilter
        })

        console.log(newFilter)
        onClick(newFilter)
    }
  return (
    <div
     onClick={()=>changeStateItem(idItem)}
     className={isActive ?'itemFilter active' : 'itemFilter'} >
        <div className="itemFilter__content">
            <div className="itemFilter__row">
                <div className="itemFilter__img">
                    <img src={iconUrl} alt={`icon ${name}`} />
                </div>
                <div className="itemFilter__name">{name}</div>
            </div>
        </div>
    </div>
  )
}

export default ItemFilter