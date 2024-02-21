const express =require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app=express()
app.use(cors())
app.use(express.json())
//Product schema
const schemaProductData = mongoose.Schema({
    name: String,
    desc: String,
    cost: String,
    image: String,    
})

const productModel = mongoose.model("products",schemaProductData)

//read data
//https://shop-plus-plus.onrender.com/
app.get("/products", async(req,res)=>{
    const data= await productModel.find({})
    res.json({success:true,data:data})
})

//create or save data
//https://shop-plus-plus.onrender.com/create
/*
{
    "name":""
    "email":""
    "mobile":""
}
*/
app.post("/createproduct", async(req,res)=>{
    //console.log(req.body)
    const data=new productModel(req.body)
    await data.save();
    res.send({success:true, message:"Product save successfully", data: data})
})

//update data
//https://shop-plus-plus.onrender.com/update
/*{
      id:""
      name:""
      email:""
      mobile:""
}*/

app.put("/updateproduct", async(req,res)=>{
    //console.log("update called")
    const{ _id,...rest}=req.body
    const data = await productModel.updateOne({_id: _id},rest)
    res.send({success:true,message:"Product updated sucessfully", data : data})
})


//delete api
//https://shop-plus-plus.onrender.com/delete/id
app.delete("/deleteproduct/:id",async(req,res)=>{
    const id=req.params.id
    //console.log(id)
    const data=await productModel.deleteOne({_id :id})
    res.send({success:true,message:"Product deleted sucessfully",data : data})
})