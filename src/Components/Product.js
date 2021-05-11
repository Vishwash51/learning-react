import React from 'react';
import { Fragment } from 'react';
import '../product.css';

export default function Product(props) {

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-3">
                <h2 style={{textAlign:'center'}}>Product 1</h2>
                    <div className="card">
                   
                        <img src="https://images.app.goo.gl/7pq6r6d8hxk9euAr7" alt="LG" style={{width:'100%'}} />
                        <h1>LG Wing</h1>
                        <p class="price">Rs 30000</p>
                        <p>LG ......</p>
                        <p><button
                         onClick={
                            ()=>{props.addToCartHandler({pice:30000,name:'LG Wing'})}
                            }
                        >Add to Cart</button></p>
                    </div>
                </div>
                <div className="col-md-3">
                <h2 style={{textAlign:'center'}}>Product 2</h2>
                    <div className="card">
                   
                        <img src="https://images.app.goo.gl/7pq6r6d8hxk9euAr7" alt="Samsung" style={{width:'100%'}} />
                        <h1>Samsung</h1>
                        <p class="price">Rs 30000</p>
                        <p>LG ......</p>
                        <p><button
                         onClick={
                            ()=>{props.addToCartHandler({pice:30000,name:'Samsung'})}
                            }
                        >Add to Cart</button></p>
                    </div>
                </div>
                <div className="col-md-3">
                <h2 style={{textAlign:'center'}}>Product 3</h2>
                    <div className="card">
                   
                        <img src="https://images.app.goo.gl/7pq6r6d8hxk9euAr7" alt="LG Wing" style={{width:'100%'}} />
                        <h1>LG Wing</h1>
                        <p class="price">Rs 35000</p>
                        <p>LG ......</p>
                        <p><button
                         onClick={
                            ()=>{props.addToCartHandler({pice:35000,name:'LG Wing'})}
                            }
                        >Add to Cart</button></p>
                    </div>
                </div>
                <div className="col-md-3">
                <h2 style={{textAlign:'center'}}>Product 4</h2>
                    <div className="card">
                   
                        <img src="https://images.app.goo.gl/7pq6r6d8hxk9euAr7" alt="LG Wing" style={{width:'100%'}} />
                        <h1>LG Wing</h1>
                        <p class="price">Rs 35000</p>
                        <p>LG ......</p>
                        <p><button
                         onClick={
                            ()=>{props.addToCartHandler({pice:35000,name:'LG Wing'})}
                            }
                        >Add to Cart</button></p>
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-3">
                <h2 style={{textAlign:'center'}}>Product 5</h2>
                    <div className="card">
                   
                        <img src="https://images.app.goo.gl/7pq6r6d8hxk9euAr7" alt="LG" style={{width:'100%'}} />
                        <h1>LG Wing</h1>
                        <p class="price">Rs 30000</p>
                        <p>LG ......</p>
                        <p><button
                         onClick={
                            ()=>{props.addToCartHandler({pice:30000,name:'LG Wing'})}
                            }
                        >Add to Cart</button></p>
                    </div>
                </div>
                <div className="col-md-3">
                <h2 style={{textAlign:'center'}}>Product 6</h2>
                    <div className="card">
                   
                        <img src="https://images.app.goo.gl/7pq6r6d8hxk9euAr7" alt="Samsung" style={{width:'100%'}} />
                        <h1>Samsung</h1>
                        <p class="price">Rs 30000</p>
                        <p>LG ......</p>
                        <p><button
                         onClick={
                            ()=>{props.addToCartHandler({pice:30000,name:'Samsung'})}
                            }
                        >Add to Cart</button></p>
                    </div>
                </div>
                <div className="col-md-3">
                <h2 style={{textAlign:'center'}}>Product 7</h2>
                    <div className="card">
                   
                        <img src="https://images.app.goo.gl/7pq6r6d8hxk9euAr7" alt="LG Wing" style={{width:'100%'}} />
                        <h1>LG Wing</h1>
                        <p class="price">Rs 35000</p>
                        <p>LG ......</p>
                        <p><button
                         onClick={
                            ()=>{props.addToCartHandler({pice:35000,name:'LG Wing'})}
                            }
                        >Add to Cart</button></p>
                    </div>
                </div>
                <div className="col-md-3">
                <h2 style={{textAlign:'center'}}>Product 8</h2>
                    <div className="card">
                   
                        <img src="https://images.app.goo.gl/7pq6r6d8hxk9euAr7" alt="LG Wing" style={{width:'100%'}} />
                        <h1>LG Wing</h1>
                        <p class="price">Rs 35000</p>
                        <p>LG ......</p>
                        <p><button
                         onClick={
                            ()=>{props.addToCartHandler({pice:35000,name:'LG Wing'})}
                            }
                        >Add to Cart</button></p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}