const express =require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const bcrypt =require('bcryptjs')
const multer  = require('multer')
const app=express()
app.use(cors())
app.use(express.json())
const fs = require('fs')

const PORT= process.env.PORT || 8000

//User schema
const schemaUserData = mongoose.Schema({
name: String,
email: String,
password: String,
mobile: Number,
address1: String,
address2: String,
country: String,
state: String,
city: String,
pincode: String,
isAdmin: 
{
    type:Boolean,
    default:false,
},
},{
    timestamps: true
})

schemaUserData.methods.checkPassword = async function (enteredpassword)
{
    try{
        
        return bcrypt.compare(enteredpassword, this.password)
    }
    catch(error)
    {
        console.log(error)
    }
};

/*schemaUserData.pre('save', async function(next){
if(!this.isModified("password"))
{
    next();
}
const salt= await bcrypt.genSalt(10);
this.password= await bcrypt.hash(this.password,salt);

});*/

const userModel = mongoose.model("user",schemaUserData)

app.get("/", async(req,res)=>{
    const data= await userModel.find({})
    res.json({success:true,data:data})
})
app.post("/", async(req,res)=>{
    //console.log(req.body)
    const {email,password} = req.body
    try{
        const user = await userModel.findOne({email:email})
        
        if(user && (await user.checkPassword(password)))
        {
            res.json(user)
        }
        else
        {
            res.json("")
        }
    }
    catch(e)
    {
        console.log(e)
    }
})
//read data
//http://localhost:8000/
app.get("/users", async(req,res)=>{
    const data= await userModel.find({})
    res.json({success:true,data:data})
})

//create or save data
//http://localhost:8000/create
/*
{
    "name":""
    "email":""
    "mobile":""
}
*/
app.post("/create", async(req,res)=>{
    //console.log(req.body)
    const salt= await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(req.body.password,salt);
    //console.log(this.password)
    const data=new userModel({
        email:req.body.email,
        password:this.password,
        name:req.body.name,
        mobile:req.body.mobile,
        address1:req.body.address1,
        address2:req.body.address2,
        country:req.body.country,
        state:req.body.state,
        city:req.body.city,
        pincode:req.body.pincode,
        isAdmin:req.body.isAdmin

    })
    await data.save();
    res.send({success:true, message:"User saved successfully", data: data})
})

//update data
//http://localhost:8000/update
/*{
      id:""
      name:""
      email:""
      mobile:""
}*/

app.put("/update", async(req,res)=>{
    //console.log("update called")
    const{ _id,...rest}=req.body
    const data = await userModel.updateOne({_id: _id},rest)
    res.send({success:true,message:"User updated sucessfully", data : data})
})


//delete api
//http://localhost:8000/delete/id
app.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    //console.log(id)
    const data=await userModel.deleteOne({_id :id})
    res.send({success:true,message:"User deleted sucessfully",data : data})
})
//////////////////////////////////////////////////////////////////////////////////////////////
//Category
/*const schemaCategoryData = mongoose.Schema({
    name: String
   
})
const categoryModel = mongoose.model("categories",schemaCategoryData)
app.get("/categories", async(req,res)=>{
    const data= await categoryModel.find({})
    res.json({success:true,data:data})
})

app.post("/createcategory", async(req,res)=>{
    //console.log(req.body)
    //const fileName=req.file.filename;
    const data=new categoryModel({
        name: req.body.name
        
    })
    await data.save();
    res.send({success:true, message:"Category save successfully", data: data})
})

app.put("/updatecategory", async(req,res)=>{
    try{
    //console.log("update called",req.body._id)
    const{ _id,...rest}=req.body;
    //const fileName=req.file.filename;
    //console.log("updatepro",req.body.name,_id,req.file.filename,upload.storage);
    const data = await categoryModel.updateOne({_id: _id},{
        name:req.body.name        
    });
    res.send({success:true,message:"Category updated successfully", data : data})
}
catch(e)
{
    console.log(e);
}
})


//delete api
//http://localhost:8000/delete/id
app.delete("/deletecategory/:id",async(req,res)=>{
    const id=req.params.id
    //console.log(id)
    const data=await categoryModel.deleteOne({_id :id})
    res.send({success:true,message:"Category deleted sucessfully",data : data})
})*/
///////////////////////////////////////////////////////////////////////////////////////////////

//Product schema
const schemaProductData = mongoose.Schema({
    name: String,
    desc: String,
    cost: Number,
    image: String,
    category:{type: mongoose.Schema.Types.ObjectId, ref: 'categories'}     
})

const productModel = mongoose.model("products",schemaProductData)

//read data
//http://localhost:8000/
app.get("/products", async(req,res)=>{
    const data= await productModel.find({})
    res.json({success:true,data:data})
})
app.get("/productbysearch/:id", async(req,res)=>{
    //console.log(req.params.id)
    const data= await productModel.find({name:req.params.id})
    res.json({success:true,data:data})
})
//create or save data
//http://localhost:8000/create
/*
{
    "name":""
    "email":""
    "mobile":""
}
*/
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/src/productimages/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix=Date.now();
      cb(null, uniqueSuffix+"_"+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
app.post("/createproduct", upload.single("image") ,async(req,res)=>{
    //console.log(req.body)
    //const fileName=req.file.filename;
    const data=new productModel({
        name: req.body.name,
        desc:req.body.desc,
        cost:req.body.cost,
        image:req.file.filename,
        category:req.body.category
    })
    await data.save();
    res.send({success:true, message:"Product save successfully", data: data})
})

//update data
//http://localhost:8000/update
/*{
      id:""
      name:""
      email:""
      mobile:""
}*/

app.put("/updateproduct", upload.single("image"),async(req,res)=>{
    try{
    //console.log("update called",req.body._id)
    const{ _id,...rest}=req.body;
    //const fileName=req.file.filename;
    //console.log("updatepro",req.body.name,_id,req.file.filename,req.body.oldimage);
    const data = await productModel.updateOne({_id: _id},{
        name:req.body.name,
        desc:req.body.desc,
        cost:req.body.cost,
        image:req.file.filename,
        category:req.body.category
    });
    await fs.unlinkSync('../client/src/productimages/'+req.body.oldimage);
    res.send({success:true,message:"Product updated successfully", data : data})
}
catch(e)
{
    console.log(e);
}
})


//delete api
//http://localhost:8000/delete/id
app.delete("/deleteproduct/:id",async(req,res)=>{
    const id=req.params.id
    //console.log(id)
    const data=await productModel.deleteOne({_id :id})
    //await fs.unlinkSync('../client/src/productimages/'+req.body.oldimage);
    res.send({success:true,message:"Product deleted sucessfully",data : data})
})
/////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////

//Order schema
const schemaOrderData = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    cart: {type: Object},
    name: String,
    mobile: Number,
    address1: String,
    address2: String,
    city: String,
    state: String,
    country: String,
    pincode: String,
    totalpayment: Number,
    orderstatus: String,
    paymentstatus: String
})

const orderModel = mongoose.model("orders",schemaOrderData)

//read data
//http://localhost:8000/
app.get("/orders", async(req,res)=>{
    const data= await orderModel.find({})
    res.json({success:true,data:data})
})

app.get("/orderbyuser/:id", async(req,res)=>{
    //console.log(req.params.id);
    const data= await orderModel.find({user: req.params.id})
    res.json({success:true,data:data})
})

//create or save data
//http://localhost:8000/create
/*
{
    "name":""
    "email":""
    "mobile":""
}
*/
app.post("/createorder", async(req,res)=>{
    //console.log(req.body)
    const data=new orderModel(req.body)
    await data.save();
    res.send({success:true, message:"Order save successfully", data: data})
})

//update data
//http://localhost:8000/update
/*{
      id:""
      name:""
      email:""
      mobile:""
}*/

app.put("/updateorder", async(req,res)=>{
    //console.log("update called")
    const{ _id,...rest}=req.body
    const data = await orderModel.updateOne({_id: _id},rest)
    res.send({success:true,message:"Order updated sucessfully", data : data})
})


//delete api
//http://localhost:8000/delete/id
app.delete("/deleteorder/:id",async(req,res)=>{
    const id=req.params.id
    //console.log(id)
    const data=await orderModel.deleteOne({_id :id})
    res.send({success:true,message:"Order deleted sucessfully",data : data})
})
/////////////////////////////////////////////////////////////////////////////////////////

mongoose.connect(`mongodb+srv://ecommerceuser:testpassword@cluster0.ilr6ges.mongodb.net/`)
.then(()=>console.log("connected to db"))
.catch((err)=>console.log(err));


app.listen(PORT,()=>console.log("server is running"));

