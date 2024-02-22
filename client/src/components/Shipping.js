import { useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { clearCart } from  "../store/actions/cartActions"
import UserNavbar from "./UserNavbar";
import axios from 'axios';
//import PaytmChecksum from './paytmChecksum';
import https from 'https';

function Shipping()
{
  const [paymentData, setPaymentData] = useState({
    token: "", 
    order: "", 
    mid: "",
    amount: ""
});
const [loading, setLoading] = useState(false);

    const dispatch=useDispatch();
    const { totalProducts, totalCost, items } = useSelector(
        state => state.cart,   
        shallowEqual
      );
      //console.log(items,totalCost,totalProducts);

    const[formData,setFormData]=useState({
        name:"",
        mobile:"",
        address1:"",
        address2:"",
        country:"",
        state:"",
        city:"",
        pincode:""
      });
      useEffect(() => {
        //initialize();
    }, []);
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
        if(formData.address1==="")
        {
          alert("Please enter address1.");
          return;
        }
        
        if(formData.mobile==="")
        {
          alert("Please enter mobile.");
          return;
        }
        if(formData.city==="")
        {
          alert("Please enter city.");
          return;
        }
        if(formData.state==="")
        {
          alert("Please enter state.");
          return;
        }
        if(formData.country==="")
        {
          alert("Please enter country.");
          return;
        }
        if(formData.pincode==="")
        {
          alert("Please enter pincode.");
          return;
        }
        const userInfo= localStorage.getItem("userInfo");
        const uinfo=JSON.parse(userInfo);
          const orderData={
            user : uinfo._id,  
            cart: items,       
            name: formData.name,
            mobile: formData.mobile,
            address1: formData.address1,
            address2: formData.address2,
            city: formData.city,
            state: formData.state,
            country: formData.country,
            pincode: formData.pincode,
            totalpayment: totalCost,
            orderstatus:"Completed",
            paymentstatus:"Payment received"
          }
          //console.log("orderData",orderData)
          const data = await axios.post("/createorder",orderData);
          console.log(data.data.data);
          window.location.href="/MyOrders"
        if(data.data.success){           
          dispatch(clearCart());
          //makePayment();
          alert(data.data.message);
        }
      }

     /*const initialize = () => {
        let orderId = 'Order_'+new Date().getTime();

        // Sandbox Credentials
        let mid = ""; // Merchant ID
        let mkey = ""; // Merhcant Key
        var paytmParams = {};

        paytmParams.body = {
         "requestType"  : "Payment",
         "mid"  : mid,
         "websiteName"  : "WEBSTAGING",
         "orderId"    : orderId,
         "callbackUrl"  : "http://localhost:3000/PaytmGatewayResponse",
         "txnAmount"   : {
         "value"   : 100,
         "currency" : "INR",
         },
         "userInfo" : {
        "custId" : '1001',
         }
        };

        PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), mkey).then(function(checksum){
            console.log(checksum);
         paytmParams.head = {
         "signature": checksum
         };

        var post_data = JSON.stringify(paytmParams);

         var options = {
         // for Staging 
         hostname: 'securegw-stage.paytm.in',

         // for Production 
        // hostname: 'securegw.paytm.in',

         port: 443,
         path: `/theia/api/v1/initiateTransaction?mid=${mid}&orderId=${orderId}`,
         method: 'POST',
         headers: {
         'Content-Type': 'application/json',
         'Content-Length': post_data.length
         }
         };

         var response = "";
         var post_req = https.request(options, function(post_res) {
        post_res.on('data', function (chunk) {
         response += chunk;
         });
                post_res.on('end', function(){
         console.log('Response: ', response);
                    // res.json({data: JSON.parse(response), orderId: orderId, mid: mid, amount: amount});
                    setPaymentData({
                        ...paymentData,
                        token: JSON.parse(response).body.txnToken, 
                        order: orderId, 
                        mid: mid,
                        amount: 100
                    })
         });
         });

         post_req.write(post_data);
            post_req.end();
        });
    }
  
      const makePayment = () => {
          setLoading(true);
          var config = {
              "root":"",
              "style": {
                "bodyBackgroundColor": "#fafafb",
                "bodyColor": "",
                "themeBackgroundColor": "#0FB8C9",
                "themeColor": "#ffffff",
                "headerBackgroundColor": "#284055",
                "headerColor": "#ffffff",
                "errorColor": "",
                "successColor": "",
                "card": {
                  "padding": "",
                  "backgroundColor": ""
                }
              },
              "data": {
                "orderId": paymentData.order,
                "token": paymentData.token,
                "tokenType": "TXN_TOKEN",
                "amount": paymentData.amount 
              },
              "payMode": {
                "labels": {},
                "filter": {
                  "exclude": []
                },
                "order": [
                    "CC",
                    "DC",
                    "NB",
                    "UPI",
                    "PPBL",
                    "PPI",
                    "BALANCE"
                ]
              },
              "website": "WEBSTAGING",
              "flow": "DEFAULT",
              "merchant": {
                "mid": paymentData.mid,
                "redirect": false
              },
              "handler": {
                "transactionStatus":function transactionStatus(paymentStatus){
                  console.log("paymentStatus => ",paymentStatus);
                  setLoading(false);
                },
                "notifyMerchant":function notifyMerchant(eventName,data){
                  console.log("Closed");
                  setLoading(false);
                }
              }
          };
        
          if (window.Paytm && window.Paytm.CheckoutJS) {
          // initialze configuration using init method
          window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
              console.log('Before JS Checkout invoke');
              // after successfully update configuration invoke checkoutjs
              window.Paytm.CheckoutJS.invoke();
          }).catch(function onError(error) {
              console.log("Error => ", error);
          });
          }
      }*/

    return (
        <>
        <UserNavbar/>
        <div className="hero-section hero-background">
        <h1 className="page-title">Organic Fruits</h1>
    </div>

    <div className="container">
        <nav className="biolife-nav">
            <ul>
                <li className="nav-item"><a href="/" className="permal-link">Home</a></li>
                <li className="nav-item"><span className="current-page">Shipping</span></li>
            </ul>
        </nav>
    </div>
    <div className="page-contain login-page">

        <div id="main-content" className="main-content">
            <div className="container">

                <div className="row">

                    <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12">
                        <div className="signin-container">
                        <form onSubmit={handleSubmit}>
                        <div>
                            <h>Shipping Address</h>
                            <p className="form-row">
                                    <label for="name">Name:<span className="requite">*</span></label>
                                    <input type="text" id="name" name="name" onChange={handleOnChange}/> 
                                </p>
                                <p className="form-row">
                                    <label for="mobile">Mobile:<span className="requite">*</span></label>
                                    <input type="number" id="mobile" name="mobile" onChange={handleOnChange} />
                                </p>
                                <p className="form-row">
                                    <label for="address1">Address1:<span className="requite">*</span></label>
                                    <input type="string" id="address1" name="address1" onChange={handleOnChange} />
                                </p>
                                <p className="form-row">
                                    <label for="address2">Address2:<span className="requite">*</span></label>
                                    <input type="string" id="address2" name="address2" onChange={handleOnChange} />
                                </p>
                                <p className="form-row">
                                    <label for="city">City:<span className="requite">*</span></label>
                                    <input type="string" id="city" name="city" onChange={handleOnChange} />
                                </p>
                                <p className="form-row">
                                    <label for="state">State:<span className="requite">*</span></label>
                                    <input type="string" id="state" name="state" onChange={handleOnChange} />
                                </p>
                                <p className="form-row">
                                    <label for="country">Country:<span className="requite">*</span></label>
                                    <input type="string" id="country" name="country" onChange={handleOnChange} />
                                </p>
                                <p className="form-row">
                                    <label for="pincode">Pincode:<span className="requite">*</span></label>
                                    <input type="number" id="pincode" name="pincode" onChange={handleOnChange}/>     
                                </p>
                              <button className="btn btn-submit btn-bold">Place order & Pay cash on delivery</button>

                          </div>
                          </form>
                            
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
        
            
        </>
    )
}
export default Shipping;