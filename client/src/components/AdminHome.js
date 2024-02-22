import React  from "react";
import { useEffect, useState } from 'react';
import {useNavigate } from "react-router-dom"

function Home(){
    const[Username,setUsername]=useState("");
    const history= useNavigate();
    useEffect(()=>{
        const userInfo= localStorage.getItem("userInfo");
        if(userInfo!=null)
        {
            //console.log(userInfo);
            const u=JSON.parse(userInfo);
            setUsername(u.name)
            if(u!=null && !u.isAdmin)
            {
                history("/Admin/AdminLogin");
                window.location.reload();        
            }
        }
        else{
            history("/Admin/AdminLogin", true);
            window.location.reload();   
        }
        },[]);
    
    const logout = () => {
        alert("Are you sure want to logout");
        localStorage.removeItem("userInfo");        
        history("/Admin/AdminLogin");
        window.location.reload();
    };

    return(
        
        <div className="homepage">
           
            <h1>Welcome {Username} to home page </h1>
            <button onClick={logout}>
                            logout
                        </button>
        </div>
    )
}
export default Home;