import React from 'react';
import './contactUs.css'
const ContactUs = () => (
  <div className="contactus">
    <p className="p">Feel Free To Contact Us At Any Time.</p>

    <form className="form" action="https://postmail.invotes.com/send"
      method="post" id="email_form">

      <input className="input" type="text" name="subject" placeholder="Subject" />
      <textarea className="textarea" name="text" placeholder="Message"></textarea>
      <input type="hidden" name="access_token" value="p9zc2fama8c1gcktlxd4mo7h" />

      <input type="hidden" name="success_url" value=".?message=Email+Successfully+Sent%21&isError=0" />
      <input type="hidden" name="error_url" value=".?message=Email+could+not+be+sent.&isError=1" />
      <input className="submit_form" type="submit" value="Send" />
    </form>
  </div>
);


export default ContactUs;