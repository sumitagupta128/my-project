//import {getDepartments, getProducts } from "../../services/catalog.js";
//const catalogService = require("../../services/catalog");
//const {getDepartments, getProducts}=catalogService ;
import axios from 'axios';
axios.defaults.baseURL="http://localhost:8000"
export const setFilter = product => {
  return {
    type: "SET_FILTER",
    filter: product
  };
};

export const clearFilter = () => {
  return {
    type: "CLEAR_FILTER"
  };
};

export const allCategory=()=>dispatch=>{
  
  Promise.all(getCategories())
  .then(data=>{
    //console.log("initProducts");
    console.log("getCategories",data[0]);
    dispatch({
      type:"INITIALIZE_CATEGORY",
      categories: data[0]
    });
  })
  .catch(()=>{
    
    dispatch({
      type:"INITIALIZE_CATEGORY",
      categories:[]
    });
  });
  };
export const initProducts=()=>dispatch=>{
  
  Promise.all([getProducts()])
  .then(data=>{
    //console.log("initProducts");
    //console.log("catalog",data);
    dispatch({
      type:"INITIALIZE_PRODUCTS",
      products: data
    });
  })
  .catch(()=>{
    
    dispatch({
      type:"INITIALIZE_PRODUCTS",
      products:[]
    });
  });
  };

  export const searchProducts=(value)=>dispatch=>{
    console.log("searchProducts",value);
    Promise.all([getSearchProducts(value)])
    .then(data=>{
      console.log("searchProducts",data);
      //console.log("catalog",data);
      dispatch({
        type:"INITIALIZE_PRODUCTS",
        products: data
      });
    })
    .catch(()=>{
      
      dispatch({
        type:"INITIALIZE_PRODUCTS",
        products:[]
      });
    });
    };
  //fetch data from an external service
  const getProducts = async()=>{
    const data = await axios.get("/products")
    
    //console.log(data.data.data);
    return data.data.data;
    
  }

  const getCategories = async()=>{
    const data = await axios.get("/categories")
    
    //console.log(data.data.data);
    return data.data.data;
    
  }
   //fetch data from an external service
   const getSearchProducts = async(value)=>{
    const data = await axios.get("/productbysearch/"+value)
    
    //console.log(data.data.data);
    return data.data.data;
    
  }