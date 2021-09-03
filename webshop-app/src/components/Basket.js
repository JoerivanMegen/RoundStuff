import React from 'react'
import { Link } from 'react-router-dom'

export default function Basket({ basketItems, onAdd, onRemove }) {
    const itemsPrice = basketItems.reduce((a, c) => a + c.price_number * c.qty, 0);
    const shippingPrice = itemsPrice > 25 ? 0 : 3;
    const totalPrice = itemsPrice + shippingPrice;
    return (
        <div>
            <div className="basket-container">
                <h2>Basket Items</h2>
                <div>
                    <div>{basketItems.length === 0 && <div>Your basket is empty. <Link to="/">Let's change that!</Link></div>}</div>
                    {basketItems.map(
                        (item) => (
                            <div key={item.id} >
                                <div className="mobile-friendly">
                                    <div className="basket-card">
                                        <div className="infoFlex">
                                            <img src={item.image} alt={item.name} />
                                            <div className="infotext">
                                                <div><h2>{item.name}</h2></div>
                                                <div><h4>{item.price_show}</h4></div>
                                            </div>
                                        </div>
                                        <div className="buttons-basket">
                                            <button onClick={() => onRemove(item)}><p>-</p></button>
                                            <div><p>{item.qty}</p></div>
                                            <button onClick={() => onAdd(item)}><p>+</p></button>
                                        </div>
                                    </div>
                                    <div className="buttons-basket-mobile">
                                        <button onClick={() => onRemove(item)}><p>-</p></button>
                                        <div><p>{item.qty}</p></div>
                                        <button onClick={() => onAdd(item)}><p>+</p></button>
                                    </div>
                                </div>
                            </div>

                        ))}
                    {basketItems.length !== 0 && (
                        <>
                            <div className="price-container">
                                <div>
                                    <div>
                                        <h3>Items Price</h3>
                                    </div>
                                    <div>
                                        <h4>€{itemsPrice.toFixed(2)}</h4>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3>Shipping Costs</h3>
                                    </div>
                                    <div>
                                        <h4>{shippingPrice === 0 ? "Free Shipping" : `€${3}`}</h4>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3><strong>Total Costs</strong></h3>
                                    </div>
                                    <div>
                                        <h4>€{totalPrice.toFixed(2)}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="price-container-mobile">
                                <div>
                                    <div>
                                        <h3>Items Price</h3>
                                    </div>
                                    <div>
                                        <h4>€{itemsPrice.toFixed(2)}</h4>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3>Shipping Costs</h3>
                                    </div>
                                    <div>
                                        <h4>{shippingPrice === 0 ? "Free Shipping" : `€${3}`}</h4>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3><strong>Total Costs</strong></h3>
                                    </div>
                                    <div>
                                        <h4>€{totalPrice.toFixed(2)}</h4>
                                    </div>
                                </div>
                            </div>
                            <button className="purchase-button">
                                Purchase
                            </button>

                        </>
                    )}
                </div>
            </div>

        </div>
    )
}
