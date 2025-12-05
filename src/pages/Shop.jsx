import { Link } from "react-router";
import Product from "../components/Product";
import { useState } from "react";
import useCart from "../useCart";

const Shop = ({ products }) => {
  const {productsCart, setProductsCart} = useCart();
  
  function updateCart(product) {
    console.log('update');
    if (productsCart.length == 0) {
      setProductsCart([product]);
      console.log(productsCart);
      return;
    }
    setProductsCart(prev => [...prev, product])
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