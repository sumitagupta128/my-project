import React from 'react'
import "../App.css"
import {MdClose} from 'react-icons/md'

const Userform =({handleSubmit,handleOnChange,handleClose, userdata})=>{

    return (

        <div className="addContainer">
          
          <form onSubmit={handleSubmit}>
          <div className="close-btn" onClick={handleClose}><MdClose/></div>
            <label htmlFor="name">Name: </label> 
            <input type="text" id="name" name="name" onChange={handleOnChange} value={userdata.name}/>            

            <label htmlFor="email">Email: </label> 
            <input type="email" id="email" name="email" onChange={handleOnChange} value={userdata.email}/>

            <label htmlFor="name">Password: </label> 
            <input type="password" id="password" name="password" onChange={handleOnChange} value={userdata.password}/>

            <label htmlFor="mobile">Mobile: </label> 
            <input type="number" id="mobile" name="mobile" onChange={handleOnChange} value={userdata.mobile}/>

            <label htmlFor="address1">Address1: </label> 
            <input type="string" id="address1" name="address1" onChange={handleOnChange} value={userdata.address1}/>

            <label htmlFor="address2">Address2: </label> 
            <input type="string" id="address2" name="address2" onChange={handleOnChange} value={userdata.address2}/>

            <label htmlFor="city">City: </label> 
            <input type="string" id="city" name="city" onChange={handleOnChange} value={userdata.city}/>

            <label htmlFor="state">State: </label> 
            <input type="string" id="state" name="state" onChange={handleOnChange} value={userdata.state}/>

            <label htmlFor="country">Country: </label> 
            <input type="string" id="country" name="country" onChange={handleOnChange} value={userdata.country}/>

            <label htmlFor="pincode">Pincode: </label> 
            <input type="number" id="pincode" name="pincode" onChange={handleOnChange} value={userdata.pincode}/>
            
            <label htmlFor="isadmin">isAdmin: </label> 
            <label id="isadmin" name="isadmin">{userdata.isAdmin.toString()}</label>
            <button className="btn">Submit</button>
          </form>
        </div>
    )
}
export default Userform