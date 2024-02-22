import { React,useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import Productform from './Productform'
import { Form } from 'react-router-dom';
import {useNavigate } from "react-router-dom"
axios.defaults.baseURL="http://localhost:8000/"

function AdminProducts(){
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
  const [desc, setDesc] = useState("");
  const [cost, setCost] = useState("");
  const [file, setFile] = useState("");
  const [oldfile, setOldFile] = useState("");
  const[category,setCategory]=useState("");
  const [id, setId] = useState("");
  const[formData,setFormData]=useState({
    name:"",
    desc:"",
    cost:"",
    image:File,
    category:""
  })
  const[formDataEdit,setFormDataEdit]=useState({
    name:"",
    desc:"",
    cost:"",
    image:File,
    category:"",
    _id:"",
  })
  const[dataList,setDataList] = useState([]);
  const handleOnChange=(e)=>{
    const{value,name}=e.target   
    console.log(name+","+value);
    if(name==="name")
    {
      setName(e.target.value);
    } 
    if(name==="desc")
    {
      setDesc(e.target.value);
    }
    if(name==="cost")
    {
      setCost(e.target.value);
    }
    if(name==="image")
    {
      setFile(e.target.files[0]);
    }
    if(name==="category")
    {
      console.log("handleOnChange",e.target.value);
      setCategory(e.target.value);
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
    if(name==="")
    {
      alert("Please enter product name.");
      return;
    }
    if(desc==="")
    {
      alert("Please enter product description.");
      return;
    }
    if(cost==="")
    {
      alert("Please enter product cost.");
      return;
    }
    if(file==="")
    {
      alert("Please select image.");
      return;
    }
    const formData2=new FormData();
    formData2.append('name',name);
    formData2.append('desc',desc);
    formData2.append('cost',cost);
    formData2.append('image',file);
    //formData2.append('category',category);
    //console.log("category",category)
    /*const product = {
      name: name,
      desc:desc,
      cost: cost,
      image: file
  };*/
  //console.log(product);
  //console.log(formData2);
   const data = await axios.post("/createproduct",formData2,{
    headers:{"Content-Type":"multipart/form-data"},
   });
    //console.log(data);
    if(data.data.success){
      setAddSection(false)
      getFetchData()
      alert(data.data.message)
    }
  }

  const getFetchData = async()=>{
    const data = await axios.get("/products",formData)
    //console.log(data);
    if(data.data.success){
      setDataList(data.data.data)
      console.log(data.data.data)
    }

  }

  useEffect(()=>{
    getFetchData();
  },[])

  //console.log(dataList)

  const handleDelete = async(id)=>{
    const data = await axios.delete("/deleteproduct/"+id)
    //console.log(data);
    if(data.data.success){
      alert(data.data.message)
      getFetchData()
    }

  }

  const handleUpdate = async(e)=>{
    e.preventDefault();
    if(name==="")
    {
      alert("Please enter product name.");
      return;
    }
    if(desc==="")
    {
      alert("Please enter product description.");
      return;
    }
    if(cost==="")
    {
      alert("Please enter product cost.");
      return;
    }
    if(file==="")
    {
      alert("Please select image.");
      return;
    }
    //console.log(formDataEdit)
    const formData2=new FormData();
    formData2.append("_id",id);
    formData2.append('name',name);
    formData2.append('desc',desc);
    formData2.append('cost',cost);
    formData2.append('image',file);
    formData2.append('oldimage',oldfile);
    //formData2.append('category',category);
    //console.log(oldfile);
    const data = await axios.put("/updateproduct", formData2,{
      headers:{"Content-Type":"multipart/form-data"},
     });
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
    if(name==="desc")
    {
      setDesc(e.target.value);
    }
    if(name==="cost")
    {
      setCost(e.target.value);
    }
    if(name==="image")
    {
      setFile(e.target.files[0]);
    }
    if(name==="category")
    {
      setCategory(e.target.value);
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
    setDesc(el.desc);
    setCost(el.cost);
    setCategory(el.category);
    setOldFile(el.image);
    //console.log(el.image);
    setEditSection(true); 
  }
  return (
    <>
    <div className="container">
    <h1>Products</h1>
      <button className="btn btn-add" onClick={()=>setAddSection(true)}>Add</button>

      {
        addSection && (
          <Productform
            handleSubmit= {handleSubmit}
            handleOnChange={handleOnChange}
            handleClose={()=>setAddSection(false)}
            productdata={formData}
          />

        )

      }
      {
        editSection && (
          <Productform
            handleSubmit= {handleUpdate}
            handleOnChange={handleEditOnChange}
            handleClose={()=>setEditSection(false)}
            productdata={formDataEdit}
          />
        )
      }

      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Desc</th>
              {/*<th>Category</th>*/}
              <th>Cost</th>
              <th>Image</th>             
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
                      <td>{el.desc}</td>
                      {/*<td>{el.category}</td>*/}
                      <td>{el.cost}</td>
                      <td>{el.image}</td>                      
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
export default AdminProducts;
