import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export const CarouselBox = () => {
   return (
      <Carousel className="container">
         <Carousel.Item>
            <img
               className="d-block w-100 carousel-img"
               src="../images/city.jpg"
               alt="Forest"
            />
            <Carousel.Caption>
               <h3>.</h3>
               <p>.</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img
               className="d-block w-100 carousel-img"
               src="../images/tcity.jpg"
               alt="Forest"
            />

            <Carousel.Caption>
               <h3>.</h3>
               <p>.</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img
               className="d-block w-100 carousel-img"
               src="../images/dcity.jpg"
               alt="Forest"
            />

            <Carousel.Caption>
               <h3>.</h3>
               <p></p>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   )
}
  
