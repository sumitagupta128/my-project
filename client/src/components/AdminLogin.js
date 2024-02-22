import React ,{useState, useEffect} from "react";
import axios from "axios"
import {useNavigate, Link } from "react-router-dom"

axios.defaults.baseURL="https://shop-plus-plus.onrender.com/"
function Login(){
const history= useNavigate();
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
async function submit(e){
    e.preventDefault()
    try{
        //console.log(email, password);
        const data = await axios.post("/",{email, password})
        .then(res=>{
            //alert(res.data)
            if(res.data!=null && res.data!=="")
            {
                const userData=res.data
                localStorage.setItem("userInfo",JSON.stringify(userData));
                history("/Admin/AdminHome",{state:{userData}});
                window.location.reload();
            }
            else if(res.data === "")
            {
                alert("User does not exist or incorrect username/password.")
                history("/Admin/AdminLogin",{state:{id:email}})
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
        <div className="login">
            <h1>Admin Login</h1>
            <form action="POST">
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="email" name="" id="" />
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" name="" id="" />
            <input type="submit" onClick={submit}/>
            </form>
           
            
        </div>
    )
}
export default Login;
