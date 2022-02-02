
import React from 'react';
import './Product1.css';
import { useStateValue } from './StateProvider';

function Product1({ id, title, price, image }) {
  const [{cart}, dispatch] = useStateValue();
  // console.log("IN SIDE CART",cart);
  const addToCart = () => {

    dispatch( {
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
      }
    }
    );
  }

  return (
    <div className="product1">
      <div className="product--info1">
        <img className="product--image1" src={image} alt="" />
        <p className="product--price1">
          <bold>₹</bold>
          <strong>{price}</strong>
        </p>
      </div>
      <button className="product--button1" onClick = { addToCart }>
        Add to Cart
      </button>
    </div>
  );
}

export default Product1;
