import { Link } from "react-router";
import CartProduct from "../components/CartProduct";
import useCart from "../useCart";

const Cart = () => {
  const {productsCard} = useCart();
  console.log(productsCard);
  return (
    <>
    <div>
      <h1>Hello from Cart!!</h1>
      <Link to="/">Click here to go home.</Link>
    </div>
    <div cart-container>
      { productsCard && productsCard.map(product => {
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