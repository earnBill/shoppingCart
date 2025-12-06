import { Link } from "react-router";
import Product from "../components/Product";
import { useState } from "react";

const Shop = ({ products, productsCart, setProductsCart }) => {
  
  function updateCart(product) {
    console.log('update');
    setProductsCart(prev => {
      //check if product exist
      const exist = prev.find(item => item.id === product.id);
      if (exist) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: (item.quantity || 1) + 1} 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1}];
    })
    console.log(productsCart);
  }
  
  function updateQuantity(e) {
    console.log(e.value);
    // setProductsCart(prev => [...prev, {}])
  }

  return(
    <div className="container">
    <h1>Hello from Shop!!</h1>  
    <Link to="/">Click here to go home.</Link>
    <div className="eshop-container">
      {products.map( product => {
        return (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            category={product.category}
            updateQuantity={updateQuantity}
            addToCart={() => updateCart(product)}
          />
        )
      }) }
    </div>
  </div>
  );
};

export default Shop;