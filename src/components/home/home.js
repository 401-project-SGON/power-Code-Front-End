/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import {render} from 'react-dom';
import SlideShow from 'react-slideshow-ui';
import { Slide } from 'react-slideshow-image';



const HomePage = () => (

  <div>
    <img src="" alt="Logo" />
    <h1>POWER CODE</h1>
    <p>Learn the technical skills you need for the job you want.</p>
    <SlideShow className="slid"
      style={{ width: 1500} }
      images={['https://www.alten.com/wp-content/uploads/2018/08/shutterstock_626435660.jpg',
        'https://i.imgur.com/6w8e1O8.png',
        'https://image.shutterstock.com/image-photo/developing-programming-coding-technologies-website-260nw-693114082.jpg',

      ]}
      withTimestamp={true}
      pageWillUpdate={(index, image) => {
        console.log(`Page Update! index: ${index}, image: ${image}`);
      }}
    />



    
    <Link to="/about">Learn more</Link>
  </div>
  
);


export default HomePage;