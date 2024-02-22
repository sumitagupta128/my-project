import React from 'react'
import UserNavbar from "./UserNavbar"
import UserBottonNavBar from './UserBottomNavBar';
function MyProfile()
{
    const userInfo= localStorage.getItem("userInfo");
    const user=JSON.parse(userInfo);
    return(
        <>
        <UserNavbar/>
        <div className="hero-section hero-background">
        <h1 className="page-title">Organic Fruits</h1>
    </div>

    <div className="container">
        <nav className="biolife-nav">
            <ul>
                <li className="nav-item"><a href="/" className="permal-link">Home</a></li>
                <li className="nav-item"><span className="current-page">My Profile</span></li>
            </ul>
        </nav>
    </div>
    <div className="page-contain login-page">

        <div id="main-content" className="main-content">
            <div className="container">

                <div className="row">

                    <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12">
                        <div className="signin-container">
                        <form>
                        <div>
                            <h>My Profile</h>
                            <p className="form-row">
                                    <label for="name">Name:<span className="requite">*</span></label>
                                    <input type="text" id="name" name="name" value={user?.name}/>            
                                </p>
                                <p className="form-row">
                                    <label for="email">Name:<span className="requite">*</span></label>
                                    <input type="email" id="email" name="email" value={user?.email}/>
                                </p>

                                <p className="form-row">
                                    <label for="mobile">Mobile:<span className="requite">*</span></label>
                                    <input type="number" id="mobile" name="mobile"  value={user?.mobile}/>
                                </p>
                                <p className="form-row">
                                    <label for="address1">Address1:<span className="requite">*</span></label>
                                    <input type="string" id="address1" name="address1" value={user?.address1}/>
                                </p>
                                <p className="form-row">
                                    <label for="address2">Address2:<span className="requite">*</span></label>
                                    <input type="string" id="address2" name="address2" value={user?.address2}/>

                                </p>
                                <p className="form-row">
                                    <label for="city">City:<span className="requite">*</span></label>
                                    <input type="string" id="city" name="city" value={user?.city}/>
                                </p>
                                <p className="form-row">
                                    <label for="state">State:<span className="requite">*</span></label>
                                    <input type="string" id="state" name="state"  value={user?.state}/>
                                </p>
                                <p className="form-row">
                                    <label for="country">Country:<span className="requite">*</span></label>
                                    <input type="string" id="country" name="country"  value={user?.country}/>
                                </p>
                                <p className="form-row">
                                    <label for="pincode">Pincode:<span className="requite">*</span></label>
                                    <input type="number" id="pincode" name="pincode" value={user?.pincode}/>
                                </p>
                              {/*<button className="btn btn-submit btn-bold">Submit</button>*/}

                          </div>
                          </form>
                            
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
      <UserBottonNavBar/> 
        </>
    )
}

export default MyProfile;