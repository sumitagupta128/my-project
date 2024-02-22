import { React,useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import Categoryform from './Categoryform'
import {useNavigate } from "react-router-dom"
function AdminCategory(){
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
    const [name, setName] = useState("");    
    const [id, setId] = useState("");
    const[formData,setFormData]=useState({
      name:""
    
    })
    const[formDataEdit,setFormDataEdit]=useState({
      name:"",      
      _id:""    
    })
    const[dataList,setDataList] = useState([]);
  
    const handleOnChange=(e)=>{
      const{value,name}=e.target   
      //console.log(name+","+value);
      if(name==="name")
      {
        setName(e.target.value);
      } 
      
      setFormData((preve)=>{
        return{
          ...preve,
          [name]:value               
        }
      })
    }
  
    const handleSubmit = async(e)=>{
      e.preventDefault(); 
      const category = {
        name: name
       
    };
    //console.log(formData2);
     const data = await axios.post("/createcategory",category);
      //console.log(data);
      if(data.data.success){
        setAddSection(false)
        getFetchData()
        alert(data.data.message)
      }
    }
  
    const getFetchData = async()=>{
      const data = await axios.get("/categories",formData)
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
      const data = await axios.delete("/deletecategory/"+id)
      //console.log(data);
      if(data.data.success){
        alert(data.data.message)
        getFetchData()
      }
  
    }
  
    const handleUpdate = async(e)=>{
      e.preventDefault();
      //console.log(formDataEdit)
      //const formData2=new FormData();
      //formData2.append("_id",id);
      //formData2.append('name',name);
      const category = {
        name: name,
       _id:id
    };
      //console.log(formData2);
      const data = await axios.put("/updatecategory", category);
      //console.log(data);
      if(data.data.success){
        getFetchData()
        alert(data.data.message)
        
        setEditSection(false)
      }
  
    }
  
    const handleEditOnChange = async(e)=>{
      const{value,name}=e.target
      //(name,e.target.value);
      
      if(name==="name")
      {
        setName(e.target.value);
      } 
      
      setFormDataEdit((preve)=>{
        return{
          ...preve,
          [name]:value
        }
      })
  
    }
  
    const handleEdit = async(el)=>{
      setFormDataEdit(el)
      setId(el._id)
      setName(el.name);
      
      setEditSection(true)    
    }
    return (
      <>
      <div className="container">
        <h1>Category</h1>
        <button className="btn btn-add" onClick={()=>setAddSection(true)}>Add</button>
  
        {
          addSection && (
            <Categoryform
              handleSubmit= {handleSubmit}
              handleOnChange={handleOnChange}
              handleClose={()=>setAddSection(false)}
              categorydata={formData}
            />
  
          )
  
        }
        {
          editSection && (
            <Categoryform
              handleSubmit= {handleUpdate}
              handleOnChange={handleEditOnChange}
              handleClose={()=>setEditSection(false)}
              categorydata={formDataEdit}
            />
          )
        }
  
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                
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
export default AdminCategory;