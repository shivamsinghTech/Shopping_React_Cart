import React, { useContext } from "react";
import {CartContext } from "./Cart";
// import material ui icons
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';


const Items = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="iamge" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
    

          <i className="fas fa-minus minus"  onClick={() => decrement(id)}>  <RemoveIcon /></i>

          <input type="text" placeholder={quantity} disabled />

          <i className="fas fa-plus add" onClick={() => increment(id)}><AddIcon/></i>
        </div>

        <div className="price">
          <h3>{price}₹</h3>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove" onClick={() => removeItem(id)}> <ClearIcon/></i>

            
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;

