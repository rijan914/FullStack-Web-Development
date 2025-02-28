

import React , {useState} from 'react';

function MyComp(){
    const [name,setName]= useState("Guest");
    const [quantity,setQuantity]= useState(1);
    const[comment,setComment ]=useState("")
    const [payment,setPayment] =useState("")
    
    const [shipping,setShipping]= useState("")

    function handleNameChange(event){
        setName(event.target.value) 
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }
    function handleCommentChange(event){
        setComment(event.target.value
        )
    }
    function handlePaymentChange(event){
        setPayment(event.target.value)
    }
    function handleShippingChange(event){
        setShipping(event.target.value)
    }
    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>Name:{name}</p>
            <input type="number" value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity:{quantity}</p>

        <textarea value= {comment} onChange={handleCommentChange} placeholder='Enter your comment here'></textarea>
        <p>Comment:{comment}</p>
        
        <select name="" id="" value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p>

        <label htmlFor="">
        <input type="radio" value="Pick Up" checked={shipping ==="Pick Up"}
        onChange={handleShippingChange}/>Pick Up</label>
        <br />
        <label htmlFor="" > 
        <input type="radio" value="Delievery" checked={shipping ==="Delievery"}
        onChange={handleShippingChange}/>
        Delievery</label>
        <p>Shipping : {shipping} </p>
        
        </div>
    )
    

}
export default MyComp;