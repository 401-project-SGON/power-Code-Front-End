import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Nav, Navbar, Form, Button, FormControl, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import './email.css'



const ContactEmail = (props) => {

    return (
        <>
          <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal">
                        <div class="lr">
                            <div class="rl">
                            </div>
                        </div>
                    </div>


                    <div class="CONTACT USiner">
                      <div class="row">
                            <div class="col-lg-8 col-lg-offset-2">
                                <div class="modal-body">

                                    <h2>Project Name</h2>
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img class="img-responsive img-centered" src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502" alt="" />
                                        <p>Dreams is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Dreams is a modern one page web template designed for almost any purpose. It’s a beautiful template that’s designed with the Bootstrap framework in mind.</p>
                                        <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/dreams-free-one-page-web-template/">FreebiesXpress.com</a>.</p>
                                        <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>
                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                 */}

        </>
    )

}

const mapStateToProps = state => ({
    reducer: state.reducer
});


export default connect(
    mapStateToProps
)(ContactEmail);