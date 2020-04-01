import React from 'react'
import { connect } from 'react-redux'
import { If, Then } from '../if/index.js'
import './userInfo.css'
const UserInfo = (props) => {
    console.log('props.reducer.user : ', props.reducer.user);
    return (
        <section className='userInfo'>
            <img className="profileImge" src={props.reducer.user.url} height='60' width='70' />
            <section className="info">
            <div class="header-blog bg-animation">
                <div class="container">
                    <div class="row header-row">
                        <h1 className='userh1' data-text="USER INFORMATION">USER INFORMATION</h1>
                    </div>
                </div>
            </div>
                <h5 className="list">name: {props.reducer.user.username}</h5>
                <h5 className="list">user id: {props.reducer.user.iat}</h5>
                <h5 className="list">phone number: {props.reducer.user.phone}</h5>
                <h5 className="list">user email: {props.reducer.user.email}</h5>
                <section className="change">
                    {/* <div class="box"><a class="button" href="#popup1">change your information</a></div> */}
                    <div id="popup1" class="overlay">
                        <div class="popup">
                            <a class="close" href="#">&times;</a>
                            <div class="content">edit form</div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}
const mapStateToProps = state => ({
    reducer: state.reducer
});
export default connect(
    mapStateToProps
)(UserInfo);

