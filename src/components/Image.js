import product from "../product.js";
import React from 'react';

const Image = () => {
    return (
        <div>
         <img src = {product.imageUrl}  alt="image"/>
        </div>
    );
};

export default Image;