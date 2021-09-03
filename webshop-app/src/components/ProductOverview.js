import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom'


export default function ProductOverview({ match, onAdd }) {
    const { types } = data;
    console.log(match.params.type_name)
    let filteredArray;
    let filteredCategory;
    let category;
    for (let index = 0; index < types.length; index++) {
        category = types[index];
        if (category.type_name === match.params.type_name) {
            filteredArray = category.products;
            filteredCategory = category;
        }
    }
    console.log(filteredArray)
    console.log(filteredCategory)

    return (
        <div className="productflex">
            <div className="infoFlex">
                <img src={filteredCategory.type_image} alt={filteredCategory.type_name} />
                <div className="categoryInfo">
                    <h2>{filteredCategory.type_name}</h2>
                    <p>{filteredCategory.type_info}</p>
                </div>
            </div>
            <div className="infoMobile">
                <p>{filteredCategory.type_info}</p>
            </div>
            <div className="productOverview">
                {filteredArray.map((product)=>
                    <div className="productcard">
                        <img src={product.image} alt={product.name} />
                        <div className="productInfo">
                            <h4>{product.name}</h4>
                            <p>{product.price_show}</p> 
                        </div>
                        <div className="product-button-container">
                                <h4 className="cta add-basket" onClick={() => onAdd(product)}>Add to basket</h4>
                                <Link to={`/shop/${filteredCategory.type_name}/${product.name}`}><h4 className="cta see-more">More info</h4></Link>
                            </div>
                    </div>
                )}
            </div>
        </div>
    )
    
}
