export default function CartProduct({ 
    image, 
    title, 
    description,
    price, 
    quantity, 
    changeQuantity, 
    removeProduct, 
    addProduct 
}) {
  return (
    <div>
      <div className="cart-product-container">
        <div className="cart-product-image">
          <img src={image} alt={title} />
        </div>
        <div className="cart-product-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="cart-quantity-container">
          <div className="quantity-container">
            <button className="button-minus" onClick={removeProduct}>-</button>
            <input type="text" value={quantity} onChange={changeQuantity}/>
            <button className="button-plus" onClick={addProduct}>+</button>
          </div>
          <div className="cart-price-container">
            <div className="cart-price">{price}</div>
            <button className="cart-remove">Remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}