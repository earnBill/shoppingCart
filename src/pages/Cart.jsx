import { Link } from "react-router";
import CartProduct from "../components/CartProduct";

const Cart = ({ productsCart, setProductsCart} ) => {
  console.log(productsCart);
  return (
    <>
    <div className="cart">
      <h1>Shopping Cart</h1>
    </div>
    {productsCart.length > 0 && <div className="cart-main-container">
      { productsCart && productsCart.map(product => {
        return (
          <CartProduct 
            key={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            price={product.price}
            quantity={product.quantity}  
          />
        )
      })}
    </div>}
    </>
  );
};

export default Cart;