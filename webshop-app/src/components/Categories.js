import React from 'react'
import { Link } from 'react-router-dom';

export default function Categories(props) {
    const { type } = props;
    return (
        <div className="categoryOverviewCard">
            <img className="small" src={type.type_image} alt={type.type_name}></img>
            <h3>{type.type_name}</h3>
            <Link to={`/shop/${type.type_name}`}>Show <br/> Products</Link>
        </div>
    )
}
