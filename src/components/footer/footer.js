import React from 'react'
import './footer.scss'
import { SocialIcon } from 'react-social-icons';




const Footer = (props) => {

    return (
        <>
            <div className="div-fix"></div>
            <footer className="page-footer">
 
                
            <div class="linkes-list">
                    <h6 className="contact-header">CONTACT</h6>
                    <p className="contact-p"> <i className="fa fa-map-marker"></i> Amman, Jordan</p>
                    <p className="contact-p"><i className="	fa fa-mobile-phone" ></i> + 962 000 000 000</p>
                    <p className="contact-p"> <i className="	fa fa-mobile-phone"></i> + 962 000 000 001</p>
                    <p className="contact-p"><i className="fa fa-inbox"></i> PowerCode@gmail.com</p>
                </div>


                <div class="linkes-list">
                    <h6 className="contact-header">USEFULL LINK</h6>
                    <p className="contact-p"> <i className="fa fa-map-marker"></i>Partnerships</p>
                    <p className="contact-p"><i className="fa fa-inbox"></i> Programming</p>
                    <p className="contact-p"><i className="	fa fa-mobile-phone" ></i> Data Science</p>
                    <p className="contact-p"> <i className="	fa fa-mobile-phone"></i>Web Development</p>
                </div>



                <div class="linkes-list">
                    <h6 className="contact-header">RESOURCES</h6>
                    <p className="contact-p"> <i className="fa fa-map-marker"></i> Articles</p>
                    <p className="contact-p"><i className="fa fa-inbox"></i> Forums</p>
                    <p className="contact-p"><i className="	fa fa-mobile-phone" >Blog</i> </p>
                    <p className="contact-p"> <i className="	fa fa-mobile-phone">Roadmap</i> </p>
                </div>


                <div class="footer-copyright"> ©2020 CopyRight : By Power Code Academy</div>

                
                <div className="social-icon">


                    <SocialIcon className="icon" url="http://twitter.com/jaketrent" />
                    <SocialIcon className="icon" url="http://google.com/jaketrent" />
                    <SocialIcon className="icon" url="http://linkedin.com/jaketrent" />
                    <SocialIcon className="icon" url="http://instagram.com/jaketrent" />
                    <SocialIcon className="icon" url="http://facebook.com/jaketrent" />

                </div>






            </footer>



        </>



    )

}

export default Footer