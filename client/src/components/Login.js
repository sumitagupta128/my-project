import React ,{useState} from "react";
import axios from "axios"
import {useNavigate } from "react-router-dom"
import UserNavbar from "./UserNavbar"
import UserBottonNavBar from "./UserBottomNavBar";
axios.defaults.baseURL="https://shop-plus-plus.onrender.com/"

function Login(){
    const history= useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    async function submit(e){
        e.preventDefault()
        if(email==="")
    {
      alert("Please enter email.");
      return;
    }
    if(password==="")
    {
      alert("Please enter password.");
      return;
    }
        try{
            //console.log(email, password);
            const data = await axios.post("/",{email, password})
            .then(res=>{
                //alert(res.data)
            if(res.data!=null && res.data!=="")
            {
                const userData=res.data
                localStorage.setItem("userInfo",JSON.stringify(userData));
                localStorage.setItem("userId",userData._id);
                history("/",{state:{userData}});
                window.location.reload();
            }
            else if(res.data === "")
            {
                alert("User does not exist or incorrect username/password.")
                history("/Signup",{state:{id:email}})
            }
                             
            })        
            .catch(e=>{
                console.log(e)
            })
            
            //console.log(data);
        }
        catch(e){
            console.log(e)
    
        }
    }
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
                <li className="nav-item"><span className="current-page">Login</span></li>
            </ul>
        </nav>
    </div>
    <div className="page-contain login-page">

        <div id="main-content" className="main-content">
            <div className="container">

                <div className="row">

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="signin-container">
                            <form action="#" name="frm-login" method="post">
                                <p className="form-row">
                                    <label for="fid-name">Email Address:<span className="requite">*</span></label>
                                    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="email" name="email" id="email" />
                                </p>
                                <p className="form-row">
                                    <label for="fid-pass">Password:<span className="requite">*</span></label>
                                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" name="password" id="password" />
                                </p>
                                <button className="btn btn-submit btn-bold" type="submit" onClick={submit}>Sign In</button>

                                {/*<p className="form-row wrap-btn">
                                    <a href="#" className="link-to-help">Forgot your password</a>
                                    </p>*/}
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="register-in-container">
                            <div className="intro">
                                <h4 className="box-title">New Customer?</h4>
                                <p className="sub-title">Create an account with us and you’ll be able to:</p>
                                <ul className="lis">
                                    <li>Check out faster</li>
                                    <li>Save multiple shipping anddesses</li>
                                    <li>Access your order history</li>
                                    <li>Track new orders</li>
                                    <li>Save items to your Wishlist</li>
                                </ul>
                                <a href="/Signup" className="btn btn-bold">Create an account</a>
                            </div>
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

export default Login