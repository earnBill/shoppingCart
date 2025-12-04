import { Link } from "react-router";
import Product from "../components/Product";
import { useState } from "react";


const Shop = ({ products }) => {
  const [productsCart, updateProductsCart] = useState([]);
  
  function updateCart() {
    console.log('update');
  }
  
  function updateQuantity(e) {
    console.log(e.value);
  }

  return(
    <div className="eshop-container">
      <h1>Hello from Shop!!</h1>  
      <Link to="/">Click here to go home.</Link>
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
            addToCart={updateCart}
          />
        )
      }) }
    </div>
  );
};

export default Shop;