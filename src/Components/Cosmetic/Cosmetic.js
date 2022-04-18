import React from 'react';
import addTodb from '../../utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    const addToCart = (name, price) => {
        // console.log('item added bro', price, "+", name);?
        // localStorage.setItem(id, 1);
        addTodb(id);  //from fakedb
    }
    // const withoutPara = () => addToCart(name, price);
    return (
        <div className='product'>
            <h1>Buy this : {name}</h1>
            <p>price : {price}</p>
            {/* <button onClick={withoutPara}>Add to cart</button> */}
            <button onClick={() => addToCart(name, price)}>Add to cart</button>
        </div>
    );
};

export default Cosmetic;