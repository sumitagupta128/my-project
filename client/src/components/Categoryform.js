import React from 'react'
import "../App.css"
import {MdClose} from 'react-icons/md'
const Categoryform =({handleSubmit,handleOnChange,handleClose, categorydata})=>{

    return (

        <div className="addContainer">
          
          <form onSubmit={handleSubmit}>
          <div className="close-btn" onClick={handleClose}><MdClose/></div>
            <label htmlFor="name">Name: </label> 
            <input type="text" id="name" name="name" onChange={handleOnChange} value={categorydata.name}/>
            <button className="btn">Submit</button>
          </form>
        </div>
    )
}
export default Categoryform