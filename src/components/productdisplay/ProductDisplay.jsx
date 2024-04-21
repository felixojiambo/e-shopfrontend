import React from 'react'
import './ProductDisplay.css'
import star_icon  from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";

const ProductDisplay = (props) => {
    const {product}=props;

  return (
    <div className="productdisplay">
<div className="productdisplay-left">
<div className="productdisplay-img-list">
    <img src="product.image" alt="" />
    <img src="product.image" alt="" />
    <img src="product.image" alt="" />
    <img src="product.image" alt="" /> </div>
    <div className="productdisplay-img">
        <img className="productdisplay-main-img" src={product.image} alt="" />
    </div>
</div>
<div className="productplay-right">
<h1>{product.name}</h1>
<div className="productdisplay-right-star">
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    
    <img src={star_dull_icon} alt="" />
    <p>(122)</p>
</div>
<div className="productdisplay-right-prices">
    <div className="productdisplay-right-price-old">${product.old_price}</div>
    <div className="productdisplay-right-price-new">${product.new_price}</div>
</div>
<div className="productdisplay-right-description">
    A small description about the product
</div>
<div className="productdisplay-right-size">
    <h1>Select Size</h1>
    <div className="productdisplay-right-size"></div>
    <div>S</div>
    <div>M</div>
    <div>L</div>
    <div>XL</div>
    <div>XLL</div>
</div>
</div><button>ADD TO CART</button>
<p className="productdisplay-right-category"><span>Category: </span>Women,T-Shirt, Crop Top</p>
<p className="productdisplay-right-category"><span>Tags: </span>Morden,Latest, Crop-Top</p>
    </div>
  )
}

export default ProductDisplay