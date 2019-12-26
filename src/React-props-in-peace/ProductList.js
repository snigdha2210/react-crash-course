import React from 'react';

import {ProductItem} from './Product';

export function ProductList() {
  return (
    <div>
      <ProductItem 
        prod = {{title: "Travel package 1", price: "1.796,90", imgUrl: 'https://source.unsplash.com/random/150x150', availability: false}}
      />
      <ProductItem 
        prod = {{title: "Travel package 2", price: "2.450,50", imgUrl: 'https://source.unsplash.com/random/140x140', availability: true}}
      />
      <ProductItem 
        prod = {{title: "Travel package 3", price: "699,90", imgUrl: 'https://source.unsplash.com/random/160x160', availability: true}}
      />
      <ProductItem 
        prod = {{title: "Travel package 4", price: "3.324,00", imgUrl: 'https://source.unsplash.com/random/155x155', availability: true}}
      />
    </div>
  );
}