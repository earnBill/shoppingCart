export default function CartProduct({ 
    image, 
    title, 
    category,
    price, 
    quantity, 
    changeQuantity, 
    removeProduct, 
    addProduct 
}) {
  return (
    <div className="cart-container">
      <div className="cart-product-container">
        <div className="cart-product-image">
          <img src={image} alt={title} />
        </div>
        <div className="info-container">
          <div className="cart-product-info">
            <h3>{title}</h3>
            <p>{category}</p>
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
    </div>
  )
}