import React from 'react';
import './product-section.styles.scss';

//Components import
import ShopDirectory from '../shop-directory/shop-directory.component';


export const ProductsSection = () => (
    <div className='products-section'>
        <div className='section-title'>
            <h2>Our Products</h2>
        </div>
        <ShopDirectory />
    </div>
);