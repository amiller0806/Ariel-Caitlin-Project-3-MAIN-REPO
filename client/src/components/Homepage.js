import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import img1 from '../carousel/carousel1.jpg'
import img2 from '../carousel/carousel2.jpg'
import img3 from '../carousel/carousel3.jpg'

const Homepage = () => {
  return (
    <Carousel variant="dark" className="carouselBox" data-interval="100">
      <Carousel.Item >
        <div className="carouselImg"><img  width="1500"  src={img1} alt="First slide"/></div>
        <Carousel.Caption>
          <h2 className='captionTitle'>Welcome to &lt;Deployed/&gt; Skincare</h2>
          <h5 className='captionText'>The app where you can look up skincare products according to your needs and concerns and find the most affordable vendors.</h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <div className="carouselImg"><img src={img2} width="1500" alt="Second slide" /></div>

        <Carousel.Caption>
          <h2 className='captionTitle'>This application was created by three female web developers/skincare enthusiasts</h2>
          <h5 className='captionText'>Each of us has tested a lot of products and we understand how important it is to find a product that will fit your individual needs.</h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <div className="carouselImg"><img width="1500" src={img3} alt="Third slide" /></div>

        <Carousel.Caption>
          <h2 className='captionTitle'>We wanted to make skincare researching more accessible and less stressful</h2>
          <h5 className='captionText'>We aspire to provide our users with the effective affordable options accessible in your area.</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}

export default Homepage