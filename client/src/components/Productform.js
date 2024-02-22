import  { React, useState }  from 'react';
import "../App.css"
import {MdClose} from 'react-icons/md'

const Productform =({handleSubmit,handleOnChange,handleClose, productdata})=>{
  const[categoryDataList,setCategoryDataList]=useState([]);

  /*const getFetchCategoryData = async()=>{
    const data = await axios.get("/categories")
    
    //console.log(data);
    if(data.data.success){
      setCategoryDataList(data.data.data)
      
    }
    
  }

  useEffect(()=>{
    getFetchCategoryData();
    console.log("categories",categoryDataList)
  },[])*/
    return (

        <div className="addContainer">
          
          <form onSubmit={handleSubmit}>
          <div className="close-btn" onClick={handleClose}><MdClose/></div>
            {/*<label htmlFor="name">Category: </label>
            <select id="category" name="category" onChange={handleOnChange}>
              {categoryDataList? categoryDataList.map((category)=>{
                  return <option value={category._id} selected={productdata.category}>{category.name}</option>
                }):null
              }
             </select>*/}
            <label htmlFor="name">Name: </label> 
            <input type="text" id="name" name="name" onChange={handleOnChange} value={productdata.name}/>            

            <label htmlFor="desc">Description: </label> 
            <input type="text" id="desc" name="desc" onChange={handleOnChange} value={productdata.desc}/>

            <label htmlFor="cost">Cost: </label> 
            <input type="number" id="cost" name="cost" onChange={handleOnChange} value={productdata.cost}/>

            <label htmlFor="imgage">Image: </label> 
            <input type="file" id="image" accept='image/*' name="image" onChange={handleOnChange}/>

            
            <button className="btn">Submit</button>
          </form>
        </div>
    )
}
export default Productform