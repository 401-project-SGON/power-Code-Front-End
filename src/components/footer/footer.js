import React from 'react'
import 'social-icon/dile-social-icon.js';
import './footer.scss'

const Footer = (props) => {

    return (
        <>

            <footer class="flex-rw">

                <ul class="footer-list-top">
                    <li>
                        <h4 class="footer-list-header">About US</h4></li>
                    <li><a href='#' class="generic-anchor footer-list-anchor" itemprop="significantLink">Jordan-Amman</a></li>
                    <li><a href='#' class="generic-anchor footer-list-anchor" itemprop="significantLink">+ 962 000 000 001</a></li>

                    <li><a href='/job-openings.html' itemprop="significantLink" class="generic-anchor footer-list-anchor">+ 962 000 000 001</a></li>

                    <li><a href='/shop/about-show-schedule' class="generic-anchor footer-list-anchor" itemprop="significantLink">powerCode@gmail.com</a></li>
                </ul>







                <ul class="footer-list-top">
                    <li>
                        <h4 class="footer-list-header">Helpful Link</h4></li>

                    <li><a href='/Angels/cat/id/70' class="generic-anchor footer-list-anchor">Event</a></li>
                    <li><a href='/Home-Decor/cat/id/64' class="generic-anchor footer-list-anchor">Courses</a></li>
                    <li><a href='/Mugs/cat/id/32' class="generic-anchor footer-list-anchor">Programming</a></li>
                    <li><a href='/Pet-Lover/cat/id/108' class="generic-anchor footer-list-anchor">Data Science</a></li>
                </ul>



                <ul class="footer-list-top">
                    <li id='help'>
                        <h4 class="footer-list-header">RESOURCES</h4></li>
                    <li><a href='/shop/about-contact' class="generic-anchor footer-list-anchor" itemprop="significantLink">Articles</a></li>
                    <li><a href='/faq.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">Forums</a></li>
                    <li id='find-a-store'><a href='/shop/store-locator' class="generic-anchor footer-list-anchor" itemprop="significantLink">Help</a></li>
                    <li id='user-registration'><a href='/shop/user-registration?URL=' class="generic-anchor footer-list-anchor" itemprop="significantLink">Blog</a></li>
                </ul>





                <section class="sohad flex-rw">
                    <span >

                        <dile-social-icon icon="facebook" class="s" title="Facebook" ></dile-social-icon>
                        <dile-social-icon icon="google" class="generic-anchor" target="_blank" title="google" itemprop="significantLink"></dile-social-icon>
                        <dile-social-icon icon="twitter" class="generic-anchor" target="_blank" title="twitter" itemprop="significantLink"></dile-social-icon>
                        <dile-social-icon icon="linkedin" class="generic-anchor" target="_blank" title="linkedin" itemprop="significantLink"></dile-social-icon>
                        <dile-social-icon icon="youtube" class="generic-anchor" target="_blank" title="youtube" itemprop="significantLink"></dile-social-icon>
                        <dile-social-icon icon="github" class="generic-anchor" target="_blank" title="github" itemprop="significantLink"></dile-social-icon>
                        <dile-social-icon icon="instagram" class="generic-anchor" target="_blank" title="instagram" itemprop="significantLink"></dile-social-icon>




                    </span>
                </section>
                <section class="footer-bottom-section flex-rw">

                </section>
            </footer>

        </>

    )

}

export default Footer