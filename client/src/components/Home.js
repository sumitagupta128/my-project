import UserBottonNavBar from "./UserBottomNavBar";
import UserNavbar from "./UserNavbar";

function Home(){
    return (
    <>        
        <UserNavbar/>
    
        <div className="page-contain">
    
            <div id="main-content" className="main-content">
    
    
                <div className="special-slide">
                    <div className="container">
                        <ul className="biolife-carousel dots_ring_style" data-slick='{"arrows": false, "dots": true, "slidesMargin": 30, "slidesToShow": 1, "infinite": true, "speed": 800, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 1}},{"breakpoint":768, "settings":{ "slidesToShow": 2, "slidesMargin":20, "dots": false}},{"breakpoint":480, "settings":{ "slidesToShow": 1}}]}' >
                            <li>
                                <div className="slide-contain biolife-banner__special">
                                    <div className="banner-contain">
                                        <div className="media">
                                            <a href="#" className="bn-link">
                                                <figure><img src="assets/images/home-03/bn_special_org.jpg" width="616" height="483" alt=""/></figure>
                                            </a>
                                        </div>
                                        <div className="text-content">
                                            <b className="first-line">Pomegranate</b>
                                            <span className="second-line">Organic Heaven Made</span>
                                            <span className="third-line">Easy <i>Healthy, Happy Life</i></span>
                                            <div className="product-detail">
                                                <h4 className="product-name">National Fresh Fruit Production</h4>
                                               
                                                <div className="buttons">
                                                    <a href="/Products" className="btn add-to-cart-btn">View</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="slide-contain biolife-banner__special">
                                    <div className="banner-contain">
                                        <div className="media">
                                            <a href="#" className="bn-link">
                                                <figure><img src="assets/images/home-03/bn_special_org.jpg" width="616" height="483" alt=""/></figure>
                                            </a>
                                        </div>
                                        <div className="text-content">
                                            <b className="first-line">Pomegranate</b>
                                            <span className="second-line">Organic Heaven Made</span>
                                            <span className="third-line">Easy <i>Healthy, Happy Life</i></span>
                                            <div className="product-detail">
                                                <h4 className="product-name">National Fresh Fruit Production</h4>
                                               
                                                <div className="buttons">
                                                    <a href="/Products" className="btn add-to-cart-btn">View</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="slide-contain biolife-banner__special">
                                    <div className="banner-contain">
                                        <div className="media">
                                            <a href="#" className="bn-link">
                                                <figure><img src="assets/images/home-03/bn_special_org.jpg" width="616" height="483" alt=""/></figure>
                                            </a>
                                        </div>
                                        <div className="text-content">
                                            <b className="first-line">Pomegranate</b>
                                            <span className="second-line">Organic Heaven Made</span>
                                            <span className="third-line">Easy <i>Healthy, Happy Life</i></span>
                                            <div className="product-detail">
                                                <h4 className="product-name">National Fresh Fruit Production</h4>
                                                <div className="price price-contain">
                                                    <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                    <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                </div>
                                                <div className="buttons">
                                                    <a href="#" className="btn add-to-cart-btn">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="slide-contain biolife-banner__special">
                                    <div className="banner-contain">
                                        <div className="media">
                                            <a href="#" className="bn-link">
                                                <figure><img src="assets/images/home-03/bn_special_org.jpg" width="616" height="483" alt=""/></figure>
                                            </a>
                                        </div>
                                        <div className="text-content">
                                            <b className="first-line">Pomegranate</b>
                                            <span className="second-line">Organic Heaven Made</span>
                                            <span className="third-line">Easy <i>Healthy, Happy Life</i></span>
                                            <div className="product-detail">
                                                <h4 className="product-name">National Fresh Fruit Production</h4>
                                                <div className="price price-contain">
                                                    <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                    <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                </div>
                                                <div className="buttons">
                                                    <a href="#" className="btn add-to-cart-btn">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="biolife-service type01 biolife-service__type01 sm-margin-top-0 xs-margin-top-45px">
                            <b className="txt-show-01">100%Nature</b>
                            <i className="txt-show-02">Fresh Fruits</i>
                            <ul className="services-list">
                                <li>
                                    <div className="service-inner">
                                        <span className="number">1</span>
                                        <span className="biolife-icon icon-beer"></span>
                                        <a className="srv-name" href="#">full stamped product</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="service-inner">
                                        <span className="number">2</span>
                                        <span className="biolife-icon icon-schedule"></span>
                                        <a className="srv-name" href="#">place and delivery on time</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="service-inner">
                                        <span className="number">3</span>
                                        <span className="biolife-icon icon-car"></span>
                                        <a className="srv-name" href="#">Free shipping in the city</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
    
            
    
                <div className="banner-promotion-01 xs-margin-top-50px sm-margin-top-11px">
                    <div className="biolife-banner promotion biolife-banner__promotion">
                        <div className="banner-contain">
                            <div className="media background-biolife-banner__promotion">
                                <div className="img-moving position-1">
                                    <img src="assets/images/home-03/img-moving-pst-1.png" width="149" height="139" alt="img msv"/>
                                </div>
                                <div className="img-moving position-2">
                                    <img src="assets/images/home-03/img-moving-pst-2.png" width="185" height="265" alt="img msv"/>
                                </div>
                                <div className="img-moving position-3">
                                    <img src="assets/images/home-03/img-moving-pst-3-cut.png" width="384" height="151" alt="img msv"/>
                                </div>
                                <div className="img-moving position-4">
                                    <img src="assets/images/home-03/img-moving-pst-4.png" width="198" height="269" alt="img msv"/>
                                </div>
                            </div>
                            <div className="text-content">
                                <div className="container text-wrap">
                                    <i className="first-line">Healthy Fruit juice</i>
                                    <span className="second-line">Vegetable Always fresh</span>
                                    <p className="third-line">Food Heaven Made Easy sounds like the name of an amazingly delicious food delivery service, but don't be fooled...</p>
                                    <div className="product-detail">
                                        <a href="/Products" className="btn add-to-cart-btn">View Products</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="banner-promotion-02 z-index-20">
                    <div className="biolife-banner promotion2 biolife-banner__promotion2">
                        <div className="banner-contain">
                            <div className="container">
                                <div className="media"></div>
                                <div className="text-content">
                                    <b className="first-line">Food Heaven Made</b>
                                    <span className="second-line">Easy <i>Healthy, Happy Life</i></span>
                                    <p className="third-line">Food Heaven Made Easy sounds like the name of an amazingly delicious food delivery service, but don't be fooled. The blog is actually a compilation of recipes, cooking videos, and nutrition tips.</p>
                                    <p className="buttons">
                                        <a href="/Products" className="btn btn-thin">View Menu Now</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                      
             
            </div>
    
        </div>
    
/       <UserBottonNavBar/>
    
        <div className="mobile-footer">
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
    
        <div className="mobile-block-global">
            <div className="biolife-mobile-panels">
                <span className="biolife-current-panel-title">Global</span>
                <a className="biolife-close-btn" data-object="global-panel-opened" href="#">&times;</a>
            </div>
            <div className="block-global-contain">
                <div className="glb-item my-account">
                    <b className="title">My Account</b>
                    <ul className="list">
                        <li className="list-item"><a href="#">Login/register</a></li>
                        <li className="list-item"><a href="#">Wishlist <span className="index">(8)</span></a></li>
                        <li className="list-item"><a href="#">Checkout</a></li>
                    </ul>
                </div>
                <div className="glb-item currency">
                    <b className="title">Currency</b>
                    <ul className="list">
                        <li className="list-item"><a href="#">€ EUR (Euro)</a></li>
                        <li className="list-item"><a href="#">$ USD (Dollar)</a></li>
                        <li className="list-item"><a href="#">£ GBP (Pound)</a></li>
                        <li className="list-item"><a href="#">¥ JPY (Yen)</a></li>
                    </ul>
                </div>
                <div className="glb-item languages">
                    <b className="title">Language</b>
                    <ul className="list inline">
                        <li className="list-item"><a href="#"><img src="assets/images/languages/us.jpg" alt="flag" width="24" height="18"/></a></li>
                        <li className="list-item"><a href="#"><img src="assets/images/languages/fr.jpg" alt="flag" width="24" height="18"/></a></li>
                        <li className="list-item"><a href="#"><img src="assets/images/languages/ger.jpg" alt="flag" width="24" height="18"/></a></li>
                        <li className="list-item"><a href="#"><img src="assets/images/languages/jap.jpg" alt="flag" width="24" height="18"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    
/        <div id="biolife-quickview-block" className="biolife-quickview-block">
            <div className="quickview-container">
                <a href="#" className="btn-close-quickview" data-object="open-quickview-block"><span className="biolife-icon icon-close-menu"></span></a>
                <div className="biolife-quickview-inner">
                    <div className="media">
                        <ul className="biolife-carousel quickview-for" data-slick='{"arrows":false,"dots":false,"slidesMargin":30,"slidesToShow":1,"slidesToScroll":1,"fade":true,"asNavFor":".quickview-nav"}'>
                            <li><img src="assets/images/details-product/detail_01.jpg" alt="" width="500" height="500"/></li>
                            <li><img src="assets/images/details-product/detail_02.jpg" alt="" width="500" height="500"/></li>
                            <li><img src="assets/images/details-product/detail_03.jpg" alt="" width="500" height="500"/></li>
                            <li><img src="assets/images/details-product/detail_04.jpg" alt="" width="500" height="500"/></li>
                            <li><img src="assets/images/details-product/detail_05.jpg" alt="" width="500" height="500"/></li>
                            <li><img src="assets/images/details-product/detail_06.jpg" alt="" width="500" height="500"/></li>
                            <li><img src="assets/images/details-product/detail_07.jpg" alt="" width="500" height="500"/></li>
                        </ul>
                        <ul className="biolife-carousel quickview-nav" data-slick='{"arrows":true,"dots":false,"centerMode":false,"focusOnSelect":true,"slidesMargin":10,"slidesToShow":3,"slidesToScroll":1,"asNavFor":".quickview-for"}'>
                            <li><img src="assets/images/details-product/thumb_01.jpg" alt="" width="88" height="88"/></li>
                            <li><img src="assets/images/details-product/thumb_02.jpg" alt="" width="88" height="88"/></li>
                            <li><img src="assets/images/details-product/thumb_03.jpg" alt="" width="88" height="88"/></li>
                            <li><img src="assets/images/details-product/thumb_04.jpg" alt="" width="88" height="88"/></li>
                            <li><img src="assets/images/details-product/thumb_05.jpg" alt="" width="88" height="88"/></li>
                            <li><img src="assets/images/details-product/thumb_06.jpg" alt="" width="88" height="88"/></li>
                            <li><img src="assets/images/details-product/thumb_07.jpg" alt="" width="88" height="88"/></li>
                        </ul>
                    </div>
                    <div className="product-attribute">
                        <h4 className="title"><a href="#" className="pr-name">National Fresh Fruit</a></h4>
                        <div className="rating">
                            <p className="star-rating"><span className="width-80percent"></span></p>
                        </div>
    
                      
                        <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.</p>
                        <div className="from-cart">
                            <div className="qty-input">
                                <input type="text" name="qty12554" value="1" data-max_value="20" data-min_value="1" data-step="1"/>
                                <a href="#" className="qty-btn btn-up"><i className="fa fa-caret-up" aria-hidden="true"></i></a>
                                <a href="#" className="qty-btn btn-down"><i className="fa fa-caret-down" aria-hidden="true"></i></a>
                            </div>
                            <div className="buttons">
                                <a href="/Products" className="btn add-to-cart-btn btn-bold">View</a>
                            </div>
                        </div>
    
                        <div className="product-meta">
                            <div className="product-atts">
                                <div className="product-atts-item">
                                    <b className="meta-title">Categories:</b>
                                    <ul className="meta-list">
                                        <li><a href="#" className="meta-link">Milk & Cream</a></li>
                                        <li><a href="#" className="meta-link">Fresh Meat</a></li>
                                        <li><a href="#" className="meta-link">Fresh Fruit</a></li>
                                    </ul>
                                </div>
                                <div className="product-atts-item">
                                    <b className="meta-title">Tags:</b>
                                    <ul className="meta-list">
                                        <li><a href="#" className="meta-link">food theme</a></li>
                                        <li><a href="#" className="meta-link">organic food</a></li>
                                        <li><a href="#" className="meta-link">organic theme</a></li>
                                    </ul>
                                </div>
                                <div className="product-atts-item">
                                    <b className="meta-title">Brand:</b>
                                    <ul className="meta-list">
                                        <li><a href="#" className="meta-link">Fresh Fruit</a></li>
                                    </ul>
                                </div>
                            </div>
                            <span className="sku">SKU: N/A</span>
                            <div className="biolife-social inline add-title">
                                <span className="fr-title">Share:</span>
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
                </div>
            </div>
        </div>
    
/        <a className="btn-scroll-top"><i className="biolife-icon icon-left-arrow"></i></a>
    
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
export default Home