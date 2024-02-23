import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import Userform from '../components/Userform'
import {useNavigate } from "react-router-dom"
axios.defaults.baseURL="https://shop-plus-plus.onrender.com"

function Users(){
  const history= useNavigate();
  useEffect(()=>{
      const userInfo= localStorage.getItem("userInfo");
      if(userInfo!=null)
        {
            //console.log(userInfo);
            const u=JSON.parse(userInfo);
            if(u!=null && !u.isAdmin)
            {
                history("/Admin/AdminLogin")        
            }
        }
        else{
            history("/Admin/AdminLogin")   
        }
      },[]);
const [addSection, setAddSection] = useState(false)
  const [editSection, setEditSection] = useState(false)
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
    isAdmin:true
  })
  const[formDataEdit,setFormDataEdit]=useState({
    name:"",
    email:"",
    password:"",
    mobile:"",
    _id:"",
    address1:"",
    address2:"",
    country:"",
    state:"",
    city:"",
    pincode:"",
    isAdmin:""

  })
  const[dataList,setDataList] = useState([]);

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
    const data = await axios.post("/create",formData)
    //console.log(data);
    if(data.data.success){
      setAddSection(false)
      getFetchData()
      alert(data.data.message)
    }
  }

  const getFetchData = async()=>{
    const data = await axios.get("/users",formData)
    //console.log(data);
    if(data.data.success){
      setDataList(data.data.data)
      
    }

  }
  useEffect(()=>{
    getFetchData()

  },[])

  //console.log(dataList)

  const handleDelete = async(id)=>{
    const data = await axios.delete("/delete/"+id)
    //console.log(data);
    if(data.data.success){
      alert(data.data.message)
      getFetchData()
    }

  }

  const handleUpdate = async(e)=>{
    e.preventDefault();
    if(formDataEdit.name==="")
    {
      alert("Please enter name.");
      return;
    }
    if(formDataEdit.email==="")
    {
      alert("Please enter email.");
      return;
    }
    if(formDataEdit.password==="")
    {
      alert("Please enter password.");
      return;
    }
    if(formDataEdit.mobile==="")
    {
      alert("Please enter mobile.");
      return;
    }
    //console.log(formDataEdit)
    const data = await axios.put("/update", formDataEdit)
    //console.log(data);
    if(data.data.success){
      getFetchData()
      alert(data.data.message)
      
      setEditSection(false)
    }

  }

  const handleEditOnChange = async(e)=>{
    const{value,name}=e.target
    setFormDataEdit((preve)=>{
      return{
        ...preve,
        [name]:value
      }
    })

  }

  const handleEdit = async(el)=>{
    setFormDataEdit(el)
    setEditSection(true)    
  }
  return (
    <>
    <div className="container">
    <h1>Users</h1>
      <button className="btn btn-add" onClick={()=>setAddSection(true)}>Add</button>

      {
        addSection && (
          <Userform
            handleSubmit= {handleSubmit}
            handleOnChange={handleOnChange}
            handleClose={()=>setAddSection(false)}
            userdata={formData}
          />

        )

      }
      {
        editSection && (
          <Userform
            handleSubmit= {handleUpdate}
            handleOnChange={handleEditOnChange}
            handleClose={()=>setEditSection(false)}
            userdata={formDataEdit}
          />
        )
      }

      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Mobile</th>
              <th>isAdmin</th>
              <th>
               
              </th>
            </tr>
          </thead>
          <tbody>
            {
              dataList[0] ? (
              dataList.map((el)=>{

                return (
                    <tr>
                      <td>{el.name}</td>
                      <td>{el.email}</td>
                      <td>{el.password}</td>
                      <td>{el.mobile}</td>
                      <td>{el.isAdmin.toString()}</td>
                      <td>
                      <button className="btn btn-edit" onClick={()=>handleEdit(el)}>Edit</button>
                      <button className="btn btn-delete" onClick={()=>handleDelete(el._id)}>Delete</button>
                      </td>
                    </tr>

                )
              }))
              : 
              (<p style={{"textAlign": "center"}}>No data</p>)
            }
          </tbody>
        </table>
        </div>
      </div>
    </>
    
  );
}
export default Users;
