import React from 'react'
import { connect } from 'react-redux'
import { span } from 'react-bootstrap'

import './home.css'





const Home = (props) => {

    return (
        <>
            {/* <!-- Services Section --> */}
            <section id="services">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2 class="section-heading">POWER CODE ACADEMY</h2>
                            <h3 class="section-subheading text-muted">Best Way To Learn Codeing</h3>
                        </div>
                    </div>
                    <div class="row text-center">



                        <div class="col-md-4">
                            <svg class="bi bi-file-earmark-code" width="5em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 1h5v1H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6h1v7a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2z" />
                                <path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 019 4.5z" />
                                <path fill-rule="evenodd" d="M8.646 6.646a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L10.293 9 8.646 7.354a.5.5 0 010-.708zm-1.292 0a.5.5 0 00-.708 0l-2 2a.5.5 0 000 .708l2 2a.5.5 0 00.708-.708L5.707 9l1.647-1.646a.5.5 0 000-.708z" clip-rule="evenodd" />
                            </svg>
                            <h4 class="service-heading">Learn</h4>
                            <p class="text-muted"> The site provides you with learning many programming languages such as JavaScript HTML CSS</p>
                        </div>



                        <div class="col-md-4">
                            <svg class="bi bi-lightning-fill" width="5em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.251.068a.5.5 0 01.227.58L9.677 6.5H13a.5.5 0 01.364.843l-8 8.5a.5.5 0 01-.842-.49L6.323 9.5H3a.5.5 0 01-.364-.843l8-8.5a.5.5 0 01.615-.09z" clip-rule="evenodd" />
                            </svg>
                            <h4 class="service-heading">Try</h4>
                            <p class="text-muted">A distinctive dynamic platform for writing code to confirm and simulate lessons learned</p>
                        </div>
                        <div class="col-md-4">

                            <svg class="bi bi-question-diamond" width="5em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 010-2.098L6.95.435zm1.4.7a.495.495 0 00-.7 0L1.134 7.65a.495.495 0 000 .7l6.516 6.516a.495.495 0 00.7 0l6.516-6.516a.495.495 0 000-.7L8.35 1.134z" clip-rule="evenodd" />
                                <path d="M5.25 6.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.307v-.355c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.326 0-2.786.647-2.754 2.533zm1.562 5.516c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                            </svg>     
                            <h4 class="service-heading">Test</h4>
                            <p class="text-muted"> A dynamic platform that enables you to test your programming knowledge and capabilities using multiple questions</p>
                        </div>
                    </div>
                </div>
            </section>





            {/* <!-- About Section --> */}
            <section id="about">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2 class="section-heading">About Code Language</h2>
                            <h3 class="section-subheading text-muted"></h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <ul class="timeline">
                                <li>
                                    <div class="timeline-image">
                                        {/* <img class="img-circle img-responsive" src="https://assets.zabbix.com/img/brands/nodejs.svg" alt="" width="180px" height="70px"/> */}
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>JS</h4>
                                            <h4 class="subheading">JAVA SCRIPT</h4>
                                        </div>
                                        <div class="timeline-body">
                                            <p class="text-muted">is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. JavaScript can function as both a procedural and an object oriented language</p>
                                        </div>
                                    </div>
                                </li>





                                <li class="timeline-inverted">
                                    <div class="timeline-image">
                                        <img class="img-circle img-responsive" src="img/about/2.jpg" alt="" />
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>CSS</h4>
                                            <h4 class="subheading">Cascading Style Sheets</h4>
                                        </div>
                                        <div class="timeline-body">
                                            <p class="text-muted">CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once. External stylesheets are stored in CSS files</p>
                                        </div>
                                    </div>
                                </li>



                                <li>
                                    <div class="timeline-image">
                                        <img class="img-circle img-responsive" src="img/about/3.jpg" alt="" />
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>HTML</h4>
                                            <h4 class="subheading">Hypertext Markup Language </h4>
                                        </div>
                                        <div class="timeline-body">
                                            <p class="text-muted">standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.HTML elements are delineated by tags, written using angle brackets</p>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>












            {/* <!-- Connnntaccccccccccccctlients Aside --> */}

            {/* 
<section id="contact">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-heading">Contact Us</h2>
                <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <form name="sentMessage" id="contactForm" novalidate="">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Your Name *" id="name" required="" data-validation-required-message="Please enter your name.">
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="form-group">
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <FormControl type="email" class="form-control" placeholder="Your Email *" id="email" required="" data-validation-required-message="Please enter your email address.">
                                <p class="help-block text-danger"></p>
                            </div>
                            
                            <div class="form-group">
                                <input type="tel" class="form-control" placeholder="Your Phone *" id="phone" required="" data-validation-required-message="Please enter your phone number.">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <textarea class="form-control" placeholder="Your Message *" id="message" required="" data-validation-required-message="Please enter a message."></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-lg-12 text-center">
                            <div id="success"></div>
                            <button type="submit" class="btn btn-xl">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
 */}











        </>
    )

}

const mapStateToProps = state => ({
    reducer: state.reducer
});


export default connect(
    mapStateToProps
)(Home);

