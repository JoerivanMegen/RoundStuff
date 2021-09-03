import React from 'react';
import data from '../data';
import CategoryOverview from './CategoryOverview';
import Carous from './Carousel';

function Homepage() {
    const { types } = data;
    
    return (
        <div>
            <h2 className="homepage-h2">Featured Products</h2>
            <div className="d-flex justify-content-center align-items-center w-80">
                <Carous />
            </div>
            <h2 className="categories-h2">Our Categories</h2>
            <div className="d-flex justify-content-center">          
                <CategoryOverview types={types} />
            </div>
        </div>
    );
}

export default Homepage
