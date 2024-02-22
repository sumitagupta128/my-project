import UserBottonNavBar from "./UserBottomNavBar";
import UserNavbar from "./UserNavbar";

function Contact(){
    return(
        <>
        <UserNavbar/>
        <div className="hero-section hero-background">
            <h1 className="page-title">Organic Fruits</h1>
        </div>

        <div className="container">
        <nav className="biolife-nav nav-86px">
            <ul>
                <li className="nav-item"><a href="/" className="permal-link">Home</a></li>
                <li className="nav-item"><span className="current-page">Contact</span></li>
            </ul>
        </nav>
    </div>
    <div className="page-contain contact-us">

        <div id="main-content" className="main-content">
            <div className="wrap-map biolife-wrap-map" id="map-block">
                <iframe
                        width="1920"
                        height="591"
                        src="https://maps.google.com/maps?width=100%&amp;height=263&amp;hl=en&amp;q=Mumbai%2India&amp;ie=UTF8&amp;t=p&amp;z=15&amp;iwloc=B&amp;output=embed"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0">
                </iframe>
            </div>

            <div className="container">

                <div className="row">

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="contact-info-container sm-margin-top-27px xs-margin-bottom-60px xs-margin-top-60px">
                            <h4 className="box-title">Our Contact</h4>
                            <p className="frst-desc"> It has great place to buy orgic fruits and vegetables. It has been 20 years of experience.</p>
                            <ul className="addr-info">
                                <li>
                                    <div className="if-item">
                                        <b className="tie">Addess:</b>
                                        <p className="dsc">Mumbai India<br/></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="if-item">
                                        <b className="tie">Phone:</b>
                                        <p className="dsc">(+91) 1122334455</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="if-item">
                                        <b className="tie">Email:</b>
                                        <p className="dsc">Organic@example.com</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="if-item">
                                        <b className="tie">Store Open:</b>
                                        <p className="dsc">8am - 08pm, Mon - Sat</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="biolife-social inline">
                                <ul className="socials">
                                    <li><a href="#" title="twitter" className="socail-btn"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="facebook" className="socail-btn"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="pinterest" className="socail-btn"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="youtube" className="socail-btn"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="instagram" className="socail-btn"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/*<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="contact-form-container sm-margin-top-112px">
                            <form action="#" name="frm-contact" >
                                <p className="form-row">
                                    <input type="text" name="name" value="" placeholder="Your Name" className="txt-input"/>
                                </p>
                                <p className="form-row">
                                    <input type="email" name="email" value="" placeholder="Email Address" className="txt-input"/>
                                </p>
                                <p className="form-row">
                                    <input type="tel" name="phone" value="" placeholder="Phone Number" className="txt-input"/>
                                </p>
                                <p className="form-row">
                                    <textarea name="mes" id="mes-1" cols="30" rows="9" placeholder="Leave Message"></textarea>
                                </p>
                                <p className="form-row">
                                    <button className="btn btn-submit" type="submit">send message</button>
                                </p>
                            </form>
                        </div>
                    </div>*/}

                </div>
            </div>
        </div>
    </div>
        <UserBottonNavBar/>
        </>
    )
}
export default Contact;