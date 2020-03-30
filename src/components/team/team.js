import React from 'react'
import { connect } from 'react-redux'
import './team.css'



const Team = (props) => {

    return (
        <>
            <section id="our-team">
                <div class="container">
   
                    <section id="our-team-content" class="row">
                        <div class="col-sm-3">
                            <div>
                                <a href="#">
                                    <figure>
                                        <img src="https://i.ibb.co/ckPNFC2/carol.jpg" alt="team-1" height='300' />
                                    </figure>
                                    <h4>Sohad Qtaitat</h4>
                                </a>
                                <p>FULL STACK JS DEVELOPER</p>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div>
                                <a href="#">
                                    <figure>
                                        <img src="https://i.ibb.co/XVkZfk5/31466735-1250324305070340-9095828395974983680-n.jpg" alt="team-2" height='300' />
                                    </figure>
                                    <h4>Obadah Al-Quran</h4>
                                </a>
                                <p>FULL STACK JS DEVELOPER</p>
                            </div>

                        </div>
                        <div class="col-sm-3">
                            <div>
                                <a href="#">
                                    <figure>
                                        <img src="https://i.ibb.co/zxGxxw2/Pics-Art-03-20-11-20-23.jpg" alt="team-3" width='200' height='300'/>
                                    </figure>
                                    <h4>Ghoroob Swalqah </h4>
                                </a>
                                <p>FULL STACK JS DEVELOPER</p>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div>
                                <a href="#">
                                    <figure>
                                        <img src="https://i.ibb.co/m62PC3v/IMG-0911.jpg" alt="team-4" height='300' />
                                    </figure>
                                    <h4>Naseem Izzat</h4>
                                </a>
                                <p>FULL STACK JS DEVELOPER</p>
                            </div>

                        </div>
                    </section>
                </div>
            </section>
































        </>
    )

}

const mapStateToProps = state => ({
    reducer: state.reducer
});


export default connect(
    mapStateToProps
)(Team);







