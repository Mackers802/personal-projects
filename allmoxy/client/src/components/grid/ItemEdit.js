import React, { useState } from 'react'

export const ItemEdit = (props) => {

    const { item } = props

    console.log(item)

    const [inputs, setInputs] = useState()

    function onChangeItem(e) {
        setInputs({
            ...inputs, 
            [e.target.name]: e.target.value
        })
    }
    
    const submitChanges = (e, _id) => {
        e.preventDefault()
        console.log(inputs, _id)
        console.log("change submitted")
    }

    return (
        <div>
            <form id="form">
              <div id="form-inputs-div">
                      <input onChange={onChangeItem} type="text" value={item.title} name="title" placeholder={item.title} className="input"/>
                      <input onChange={onChangeItem} type="text" name="description" placeholder={item.description} className="input"/>
                      <input onChange={onChangeItem} type="number" name="price" placeholder={item.price} className="input"/>
                      <input onChange={onChangeItem} type="number" name="quantity" placeholder={item.quantity} className="input"/>
                      <input onChange={onChangeItem} type="text" name="image" placeholder={item.image} className="input"/>
              </div>
              <button onClick={() => submitChanges(item._id) }>Submit Changes</button>
        </form>
    </div>
    )
}
