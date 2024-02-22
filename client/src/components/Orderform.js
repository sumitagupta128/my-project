import React from 'react'
import "../App.css"
import {MdClose} from 'react-icons/md'

const Orderform =({handleSubmit,handleOnChange,handleClose, orderdata})=>{

    return (

        <div className="addContainer">
          
          <form onSubmit={handleSubmit}>
          <div className="close-btn" onClick={handleClose}><MdClose/></div>
            <label htmlFor="name">Name: </label> 
            <input type="text" id="name" name="name" onChange={handleOnChange} value={orderdata.name}/>            

            <label htmlFor="email">Email: </label> 
            <input type="email" id="email" name="email" onChange={handleOnChange} value={orderdata.email}/>

            <label htmlFor="name">Password: </label> 
            <input type="password" id="password" name="password" onChange={handleOnChange} value={orderdata.password}/>

            <label htmlFor="mobile">Mobile: </label> 
            <input type="number" id="mobile" name="mobile" onChange={handleOnChange} value={orderdata.mobile}/>

           
            <button className="btn">Submit</button>
          </form>
        </div>
    )
}
export default Orderform