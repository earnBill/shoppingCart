import CartProduct from "../components/CartProduct";
import EmptyCart from "../components/EmptyCart";
import Checkout from "../components/Checkout";

const Cart = ({ productsCart, setProductsCart} ) => {
  console.log(productsCart);

  function addProduct(product) {
    setProductsCart(prev => (
      prev.map(item => 
        item.id === product.id
        ? {...item, quantity: product.quantity + 1 }
        : item
      )
    ))
  }
  function removeProduct(product) {
    setProductsCart(prev => (
      prev.map(item => 
        item.id === product.id
        ? {...item, quantity: product.quantity -1 }
        : item
      )
    ))
  }

  return (
    <div className="cart">
    {productsCart.length === 0 && <EmptyCart />}
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
            addProduct={() => addProduct(product)}
            removeProduct={() => removeProduct(product)}  
          />
        )
      })}
    </div>}
    {productsCart.length > 0 && <Checkout />}
    </div>
  );
};

export default Cart;