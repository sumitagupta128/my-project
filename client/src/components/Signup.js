import React ,{useState,useEffect} from "react";
import axios from "axios"
import {useNavigate,Link } from "react-router-dom"
import UserNavbar from "./UserNavbar"
import UserBottonNavBar from "./UserBottomNavBar";

function Signup(){
    const navigate = useNavigate();
const[formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        mobile:"",
        address1:"",
        address2:"",
        country:"",
        state:"",
        city:"",
        pincode:"",
        isAdmin:false
      })
const handleOnChange=(e)=>{
    const{value,name}=e.target
    setFormData((preve)=>{
      return{
        ...preve,
        [name]:value
      }
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(formData.name==="")
    {
      alert("Please enter name.");
      return;
    }
    if(formData.email==="")
    {
      alert("Please enter email.");
      return;
    }
    if(formData.password==="")
    {
      alert("Please enter password.");
      return;
    }
    if(formData.mobile==="")
    {
      alert("Please enter mobile.");
      return;
    }
    if(formData.pincode==="")
    {
      alert("Please enter pincode.");
      return;
    }
    const data = await axios.post("/create",formData)
    //console.log(data);
    if(data.data.success){
      //setAddSection(false)
      //getFetchData()
      alert(data.data.message)
      navigate("/Login")
    }
  }
//async function submit(e){
//    e.preventDefault()
//    try{
//        await axios.post("https://shop-plus-plus.onrender.com/signup",{email,password})
//    }
//    catch(e){
//        console.log(e)

//    }
//}

    return(
      <>
      <UserNavbar/>
      <div className="hero-section hero-background">
        <h1 className="page-title">Organic Fruits</h1>
    </div>

    <div className="container">
        <nav className="biolife-nav">
            <ul>
                <li className="nav-item"><a href="/" className="permal-link">Home</a></li>
                <li className="nav-item"><span className="current-page">Signup</span></li>
            </ul>
        </nav>
    </div>
    <div className="page-contain login-page">

        <div id="main-content" className="main-content">
            <div className="container">

                <div className="row">

                    <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12">
                        <div className="signin-container">
                            <form action="POST" onSubmit={handleSubmit}>
                                <p className="form-row">
                                    <label for="name">Name:<span className="requite">*</span></label>
                                    <input type="text" id="name" name="name" onChange={handleOnChange}/> 
                                </p>
                                <p className="form-row">
                                    <label for="email">Email:<span className="requite">*</span></label>
                                    <input type="email" id="email" name="email" onChange={handleOnChange} />
                                </p>
                                <p className="form-row">
                                    <label for="password">Password:<span className="requite">*</span></label>
                                    <input type="password" id="password" name="password" onChange={handleOnChange} />
                                </p>
                                <p className="form-row">
                                    <label for="mobile">Mobile:<span className="requite">*</span></label>
                                    <input type="number" id="mobile" name="mobile" onChange={handleOnChange} />
                                </p>
                                <p className="form-row">
                                    <label for="address1">Address1:<span className="requite">*</span></label>
                                    <input type="string" id="address1" name="address1" onChange={handleOnChange} />
                                </p>
                                <p className="form-row">
                                    <label for="address2">Address2:<span className="requite">*</span></label>
                                    <input type="string" id="address2" name="address2" onChange={handleOnChange} />
                                </p>
                                <p className="form-row">
                                    <label for="city">City:<span className="requite">*</span></label>
                                    <input type="string" id="city" name="city" onChange={handleOnChange} />
                                </p>
                                <p className="form-row">
                                    <label for="state">State:<span className="requite">*</span></label>
                                    <input type="string" id="state" name="state" onChange={handleOnChange} />
                                </p>
                                <p className="form-row">
                                    <label for="country">Country:<span className="requite">*</span></label>
                                    <input type="string" id="country" name="country" onChange={handleOnChange} />
                                </p>
                                <p className="form-row">
                                    <label for="pincode">Pincode:<span className="requite">*</span></label>
                                    <input type="number" id="pincode" name="pincode" onChange={handleOnChange}/>     
                                </p>
                                <button className="btn btn-submit btn-bold">Submit</button>
                                {/*<p className="form-row wrap-btn">
                                    <a href="#" className="link-to-help">Forgot your password</a>
                                    </p>*/}
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
        
        <UserBottonNavBar/>
        </>
    )
}
export default Signup;
