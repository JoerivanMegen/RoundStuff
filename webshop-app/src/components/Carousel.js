import React, { useState } from 'react'
import data from '../data'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Carous() {
  const { types } = data;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
      {/* <Carousel.Item>
        <div className="carousel-card">
          <img
            src={types[0].products[2].image}
            alt="Third slide"
          />
          <div className="carousel-text">
            <h3>{types[0].products[0].name}</h3>
            <p>{types[0].products[0].description}</p>
            <h4>{types[0].products[0].price_show}</h4>
            <div className="carousel-buttons">
              <Link to={`/shop/${types[0].type_name}/${types[0].products[0].name}`}><h4 className="cta see-more">More Info</h4></Link>
              {/* <h4 className="cta add-basket">Add to basket</h4> */}
            {/* </div>
          </div>
        </div>
      </Carousel.Item> */} 
      <Carousel.Item>
        <div className="carousel-card">
          <img
            src={types[0].products[1].image}
            alt="First slide"
          />
          <div className="carousel-text">
            <h3>{types[0].products[1].name}</h3>
            <p>{types[0].products[1].description}</p>
            <h4>{types[0].products[1].price_show}</h4>
            <div className="carousel-buttons">
              <Link to={`/shop/${types[0].type_name}/${types[0].products[1].name}`}><h4 className="cta see-more">See more</h4></Link>
              {/* <h4 className="cta add-basket">Add to basket</h4> */}
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-card">
          <img
            src={types[2].products[4].image}
            alt="Second slide"
          />
          <div className="carousel-text">
            <h3>{types[2].products[4].name}</h3>
            <p>{types[2].products[4].description}</p>
            <h4>{types[2].products[4].price_show}</h4>
            <div className="carousel-buttons">
              <Link to={`/shop/${types[2].type_name}/${types[2].products[4].name}`}><h4 className="cta see-more">See more</h4></Link>
              {/* <h4 className="cta add-basket">Add to basket</h4> */}
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-card">
          <img
            src={types[2].products[3].image}
            alt="Third slide"
          />
          <div className="carousel-text">
            <h3>{types[2].products[3].name}</h3>
            <p>{types[2].products[3].description}</p>
            <h4>{types[2].products[3].price_show}</h4>
            <div className="carousel-buttons">
              <Link to={`/shop/${types[2].type_name}/${types[2].products[3].name}`}><h4 className="cta see-more">See more</h4></Link>
              {/* <h4 className="cta add-basket">Add to basket</h4> */}
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}


