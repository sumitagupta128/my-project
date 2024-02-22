import UserBottonNavBar from "./UserBottomNavBar";
import UserNavbar from "./UserNavbar";

function AboutUs(){
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
                <li className="nav-item"><span className="current-page">About us</span></li>
            </ul>
        </nav>
    </div>

    <div id="main-content" className="main-content">

            <div className="welcome-us-block">
                <div className="container">
                    <h4 className="title">Welcome to Biolife store!</h4>
                    <div className="text-wraper">
                        <p className="text-info">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,</p>
                        <p className="qt-text">“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.”</p>
                    </div>
                </div>
            </div>

            <div className="why-choose-us-block">
                <div className="container">
                    <h4 className="box-title">Why Choose us</h4>
                    <b className="subtitle">Natural food is taken from the world's most modern farms with strict safety cycles</b>
                    <div className="showcase">
                        <div className="sc-child sc-left-position">
                            <ul className="sc-list">
                                <li>
                                    <div className="sc-element color-01">
                                        <span className="biolife-icon icon-fresh-drink"></span>
                                        <div className="txt-content">
                                            <span className="number">01</span>
                                            <b className="title">Always Fresh</b>
                                            <p className="desc">Natural products are kept in the best condition to ensure always fresh</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="sc-element color-02">
                                        <span className="biolife-icon icon-healthy-about"></span>
                                        <div className="txt-content">
                                            <span className="number">02</span>
                                            <b className="title">Overall Healthy</b>
                                            <p className="desc">Natural products are kept in the best condition to ensure always fresh</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="sc-element color-03">
                                        <span className="biolife-icon icon-green-safety"></span>
                                        <div className="txt-content">
                                            <span className="number">03</span>
                                            <b className="title">Encironmental Safety</b>
                                            <p className="desc">Natural products are kept in the best condition to ensure always fresh</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="sc-child sc-center-position">
                            <figure><img src="assets/images/about-us/bn04.jpg" alt="" width="622" height="656"/></figure>
                        </div>
                        <div className="sc-child sc-right-position">
                            <ul className="sc-list">
                                <li>
                                    <div className="sc-element color-04">
                                        <span className="biolife-icon icon-capacity-about"></span>
                                        <div className="txt-content">
                                            <span className="number">04</span>
                                            <b className="title">Antioxidant Capacity</b>
                                            <p className="desc">Natural products are kept in the best condition to ensure always fresh</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="sc-element color-05">
                                        <span className="biolife-icon icon-arteries-about"></span>
                                        <div className="txt-content">
                                            <span className="number">05</span>
                                            <b className="title">Good For Arteries</b>
                                            <p className="desc">Natural products are kept in the best condition to ensure always fresh</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="sc-element color-06">
                                        <span className="biolife-icon icon-title"></span>
                                        <div className="txt-content">
                                            <span className="number">06</span>
                                            <b className="title">Quality Standards</b>
                                            <p className="desc">Natural products are kept in the best condition to ensure always fresh</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonial-block">
                <div className="container">
                    <h4 className="box-title">Testimonial</h4>
                    <ul className="testimonial-list biolife-carousel" data-slick='{"arrows":false,"dots":true,"infinite":false,"speed":400,"slidesMargin":30,"slidesToShow":3, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 3}},{"breakpoint":992, "settings":{ "slidesToShow": 2}},{"breakpoint":768, "settings":{ "slidesToShow": 2}},{"breakpoint":500, "settings":{ "slidesToShow": 1}}]}'>
                        <li>
                            <div className="testml-elem">
                                <div className="avata">
                                    <figure><img src="assets/images/about-us/author-01.png" alt="" width="217" height="217"/></figure>
                                </div>
                                <p className="desc">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                                <b className="name">Ms. Sumita Gupta</b>
                                <b className="title">Manager, My co.</b>
                                <div className="rating"><p className="star-rating"><span className="width-80percent"></span></p></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    </div>

    <UserBottonNavBar/>
    </>
    )
}
export default AboutUs;