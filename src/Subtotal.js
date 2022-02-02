
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import "./Subtotal.css";
import { getCartTotal } from "./reducer.js";
import { useHistory } from "react-router-dom";


function Subtotal() {
  const history = useHistory();
  const [{cart}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
              renderText = { (value) => (
             <>
                <p>SubTotal ({cart.length} item): <strong>{value}</strong></p> 
                <small className="subtotal--gift">
                <input type="checkbox" />This order contains a gift
                </small>
             </>
              )}
              decimalScale = {2}
              value = {getCartTotal(cart)}
              displayType = {"text"}
              thousandSeparator = {true}
              prefix = {"₹"}
            />
           
           <button className="subtotal--button" onClick={e => history.push('/Payment')} >Proceed to Buy</button>
           
        </div>
    )
}

export default Subtotal
