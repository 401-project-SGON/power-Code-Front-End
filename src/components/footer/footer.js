/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="div-fix"></div>
        <footer className="page-footer">


          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}



          <div className="links-div4">
            <h5 class="linkes-header4" >CONTACT</h5>
            <ul class="linkes-list">
              <li> <a href="#!">Jordan-Amman</a></li>
              <li><a href="#!">+ 962 000 000 001</a></li>
              <li><a href="#!">+ 962 000 000 001</a></li>
              <li><a href="#!">powerCode@gmail.com</a></li>
            </ul>
          </div>


          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}



          <div className="links-div">
            <h5 class="linkes-header">SUPPORT</h5>
            <ul class="linkes-list">
              <li> <a href="#!">Documentation</a></li>
              <li><a href="#!">Forums</a></li>
              <li><a href="#!">Help&Support</a></li>
              <li><a href="#!">Scholarship</a></li>
            </ul>
          </div>



  




          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}



          <div className="links-div3">
            <h5 class="linkes-header3">USEFUL LINKS</h5>
            <ul class="linkes-list">
              <li> <a href="#!">About Us</a></li>
              <li><a href="#!">Event</a></li>
              <li><a href="#!">News</a></li>
              <li><a href="#!">Contact</a></li>
            </ul>
          </div>





          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="social-icon">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-google"></a>
            <a href="#" class="fa fa-linkedin"></a>
            <a href="#" class="fa fa-instagram"></a>
          </div>


          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <div class="footer-copyright">©2020 CopyRight:
            <a href="#"> Power Code</a>
          </div>
        </footer>
      </>
    );
  }
}


export default Footer;