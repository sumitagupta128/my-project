function UserBottonNavBar(){
    return(
        <>
    <footer id="footer" className="footer layout-03">
        <div className="footer-content background-footer-03">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-9">
                        <section className="footer-item">
                            <a href="index-2.html" className="logo footer-logo"><img src="/assets/images/organic-3-green.png" alt="biolife logo" width="135" height="34"/></a>
                            <div className="footer-phone-info">
                                <i className="biolife-icon icon-head-phone"></i>
                                <p className="r-info">
                                    <span>Got Questions ?</span>
                                    <span>(+91) 1122334455</span>
                                </p>
                            </div>
                            {/*<div className="newsletter-block layout-01">
                                <h4 className="title">Newsletter Signup</h4>
                                <div className="form-content">
                                    <form action="#" name="new-letter-foter">
                                        <input type="email" className="input-text email" value="" placeholder="Your email here..."/>
                                        <button type="submit" className="bnt-submit" name="ok">Sign up</button>
                                    </form>
                                </div>
                            </div>*/}
                        </section>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 md-margin-top-5px sm-margin-top-50px xs-margin-top-40px">
                        <section className="footer-item">
                            <h3 className="section-title">Useful Links</h3>
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-xs-6">
                                    <div className="wrap-custom-menu vertical-menu-2">
                                        <ul className="menu">
                                        <li><a href="/">Home</a></li>
                                            <li><a href="/AboutUs">About Us</a></li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-xs-6">
                                    <div className="wrap-custom-menu vertical-menu-2">
                                        <ul className="menu">
                                            <li><a href="/Products">Products</a></li>
                                            <li><a href="/Contact">Contacts Us</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 md-margin-top-5px sm-margin-top-50px xs-margin-top-40px">
                        <section className="footer-item">
                            <h3 className="section-title">Transport Offices</h3>
                            <div className="contact-info-block footer-layout xs-padding-top-10px">
                                <ul className="contact-lines">
                                    <li>
                                        <p className="info-item">
                                            <i className="biolife-icon icon-location"></i>
                                            <b className="desc">India </b>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="info-item">
                                            <i className="biolife-icon icon-phone"></i>
                                            <b className="desc">Phone: (+91) 1122334455</b>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="info-item">
                                            <i className="biolife-icon icon-letter"></i>
                                            <b className="desc">Email:  contact@company.com</b>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="info-item">
                                            <i className="biolife-icon icon-clock"></i>
                                            <b className="desc">Hours: Mon-Fri: 8:30am-7:30pm; Sat-Sun: 9:30am-4:30pm
</b>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="biolife-social inline">
                                <ul className="socials">
                                    <li><a href="#" title="twitter" className="socail-btn"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="facebook" className="socail-btn"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="pinterest" className="socail-btn"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="youtube" className="socail-btn"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="instagram" className="socail-btn"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="separator sm-margin-top-70px xs-margin-top-40px"></div>
                    </div>
                    
                    <div className="col-lg-12 col-sm-6 col-xs-12">
                        <div className="payment-methods">
                            <ul>
                                <li><a href="#" className="payment-link"><img src="/assets/images/card1.jpg" width="51" height="36" alt=""/></a></li>
                                <li><a href="#" className="payment-link"><img src="/assets/images/card2.jpg" width="51" height="36" alt=""/></a></li>
                                <li><a href="#" className="payment-link"><img src="/assets/images/card3.jpg" width="51" height="36" alt=""/></a></li>
                                <li><a href="#" className="payment-link"><img src="/assets/images/card4.jpg" width="51" height="36" alt=""/></a></li>
                                <li><a href="#" className="payment-link"><img src="/assets/images/card5.jpg" width="51" height="36" alt=""/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

/    <div className="mobile-footer">
        <div className="mobile-footer-inner">
            <div className="mobile-block block-menu-main">
                <a className="menu-bar menu-toggle btn-toggle" data-object="open-mobile-menu" href="javascript:void(0)">
                    <span className="fa fa-bars"></span>
                    <span className="text">Menu</span>
                </a>
            </div>
            <div className="mobile-block block-sidebar">
                <a className="menu-bar filter-toggle btn-toggle" data-object="open-mobile-filter" href="javascript:void(0)">
                    <i className="fa fa-sliders" aria-hidden="true"></i>
                    <span className="text">Sidebar</span>
                </a>
            </div>
            <div className="mobile-block block-minicart">
                <a className="link-to-cart" href="#">
                    <span className="fa fa-shopping-bag" aria-hidden="true"></span>
                    <span className="text">Cart</span>
                </a>
            </div>
            <div className="mobile-block block-global">
                <a className="menu-bar myaccount-toggle btn-toggle" data-object="global-panel-opened" href="javascript:void(0)">
                    <span className="fa fa-globe"></span>
                    <span className="text">Global</span>
                </a>
            </div>
        </div>
    </div>

/    <div className="mobile-block-global">
        <div className="biolife-mobile-panels">
            <span className="biolife-current-panel-title">Global</span>
            <a className="biolife-close-btn" data-object="global-panel-opened" href="#">&times;</a>
        </div>
        <div className="block-global-contain">
            <div className="glb-item my-account">
                <b className="title">My Account</b>
                <ul className="list">
                    <li className="list-item"><a href="/Login">Login/register</a></li>
                    <li className="list-item"><a href="/WishlistCart">Wishlist <span className="index"></span></a></li>
                </ul>
            </div>
            <div className="glb-item currency">
                <b className="title">Currency</b>
                <ul className="list">
                    <li className="list-item"><a href="#">₹ Rupees (Indian)</a></li>
                </ul>
            </div>
            
        </div>
    </div>

   

    <a className="btn-scroll-top"><i className="biolife-icon icon-left-arrow"></i></a>

    <script src="assets/js/jquery-3.4.1.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/jquery.countdown.min.js"></script>
    <script src="assets/js/jquery.nice-select.min.js"></script>
    <script src="assets/js/jquery.nicescroll.min.js"></script>
    <script src="assets/js/slick.min.js"></script>
    <script src="assets/js/biolife.framework.js"></script>
    <script src="assets/js/functions.js"></script>
        </>
    )
}
export default UserBottonNavBar;