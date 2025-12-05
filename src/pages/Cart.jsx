import { Link } from "react-router";
import CartProduct from "../components/CartProduct";

const Cart = ({ productsCart, setProductsCart} ) => {
  console.log(productsCart);
  return (
    <>
    <div>
      <h1>Hello from Cart!!</h1>
      <Link to="/">Click here to go home.</Link>
    </div>
    <div cart-container>
      { productsCart && productsCart.map(product => {
        return (
          <CartProduct 
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}  
          />
        )
      })}
    </div>
    </>
  );
};

export default Cart;