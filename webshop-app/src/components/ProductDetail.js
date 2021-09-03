import React from 'react';
import data from '../data';

export default function ProductDetail({match, onAdd}) {
    console.log(match)
    console.log(match.params.type_name)
    console.log(match.params.product_name)
    const {types} = data;
    let filteredArray;
    let category;
    let oneObject
    let relevantProduct
    for (let index = 0; index < types.length; index++) {
        category = types[index];
        if (category.type_name === match.params.type_name) {
            filteredArray = category.products;
            for (let index = 0; index < filteredArray.length; index++) {
                oneObject = filteredArray[index]
                if(oneObject.name === match.params.product_name){
                    relevantProduct = oneObject;
                } 
            }
        }
    }
console.log(relevantProduct)
    

    return (
        <div className="productDetailContainer">
            <div className="imageAndInfo">
                <img src={relevantProduct.image} alt={relevantProduct.name} />
                <div className="name-price-buttons">
                    <h2>{relevantProduct.name}</h2>
                    <h2>{relevantProduct.price_show}</h2>
                    <br/>
                    <h4 className="cta add-basket" onClick={() => onAdd(relevantProduct)}>Add to basket</h4>
                </div>
                <br/>
            </div>
            <div className="description-container">
                <h2>Description</h2>
                <p className="description">
                    {relevantProduct.description}
                </p>
            </div>
        </div>
    )
}
